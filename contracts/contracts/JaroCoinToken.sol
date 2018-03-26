pragma solidity 0.4.19;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

 /**
 * @title Contract that will work with ERC223 tokens.
 */
contract ERC223Receiver {
    struct TKN {
        address sender;
        uint value;
        bytes data;
        bytes4 sig;
    }

    function tokenFallback(address _from, uint _value, bytes _data) public pure {
      TKN memory tkn;
      tkn.sender = _from;
      tkn.value = _value;
      tkn.data = _data;
      uint32 u = uint32(_data[3]) + (uint32(_data[2]) << 8) + (uint32(_data[1]) << 16) + (uint32(_data[0]) << 24);
      tkn.sig = bytes4(u);

      /* tkn variable is analogue of msg variable of Ether transaction
      *  tkn.sender is person who initiated this token transaction   (analogue of msg.sender)
      *  tkn.value the number of tokens that were sent   (analogue of msg.value)
      *  tkn.data is data of token transaction   (analogue of msg.data)
      *  tkn.sig is 4 bytes signature of function
      *  if data of token transaction is a function execution
      */
    }
}

contract JaroCoinToken is Ownable {
    using SafeMath for uint256;

    string public constant name = "JaroCoin";
    string public constant symbol = "JARO";
    uint8 public constant decimals = 8;

    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;
    mapping (address => mapping (uint256 => bool)) private usedNonces;

    event Mint(address indexed to, uint256 amount);
    event Burn(address indexed from,uint256 amount);
    event Transfer(address indexed from, address indexed to, uint value, bytes data);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    uint256 public totalSupply;
    uint256 public constant maxSupply = 21000000e8;

    /**
    * @dev transfer token for a specified address
    * @param _to The address to transfer to.
    * @param _value The amount to be transferred.
    */
    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balanceOf[msg.sender]);

        // SafeMath.sub will throw if there is not enough balance.
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        Transfer(msg.sender, _to, _value, "");
        return true;
    }

    /**
    * @dev transfer token for a specified address via cheque
    * @param _to The address to transfer to.
    * @param _value The amount to be transferred.
    * @param _data The data to be executed.
    */
    function transferByCheque(address _to, uint256 _value, bytes _data, uint256 _nonce, uint8 v, bytes32 r, bytes32 s) public returns (bool) {
        require(_to != address(this));

        // Check if signature is valid, get signer's address and mark this cheque as used.
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 hash = keccak256(prefix, keccak256(_to, _value, _nonce));
        // bytes32 hash = keccak256(_to, _value, _data, _nonce);

        address signer = ecrecover(hash, v, r, s);
        require (signer != 0);
        require (!usedNonces[signer][_nonce]);
        usedNonces[signer][_nonce] = true;

        // Transfer tokens
        balanceOf[signer] = balanceOf[signer].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        Transfer(signer, _to, _value, _data);

        if(isContract(_to)) {
            ERC223Receiver receiver = ERC223Receiver(_to);
            receiver.tokenFallback(signer, _value, _data);
        }

        // Alternative ideas from ERC827
        // super.transferFrom(signer, _to, _value);
        // require(_to.call(_data));

        return true;
    }

    /**
    * @dev Transfer tokens from one address to another
    * @param _from address The address which you want to send tokens from
    * @param _to address The address which you want to transfer to
    * @param _value uint256 the amount of tokens to be transferred
    */
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);

        balanceOf[_from] = balanceOf[_from].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);
        Transfer(_from, _to, _value, "");
        return true;
    }

    /**
    * @dev Increase the amount of tokens that an owner allowed to a spender.
    *
    * approve should be called when allowed[_spender] == 0. To increment
    * allowed value is better to use this function to avoid 2 calls (and wait until
    * the first transaction is mined)
    * From MonolithDAO Token.sol
    * @param _spender The address which will spend the funds.
    * @param _addedValue The amount of tokens to increase the allowance by.
    */
    function increaseApproval(address _spender, uint _addedValue) public returns (bool) {
        allowance[msg.sender][_spender] = allowance[msg.sender][_spender].add(_addedValue);
        Approval(msg.sender, _spender, allowance[msg.sender][_spender]);
        return true;
    }

    /**
    * @dev Decrease the amount of tokens that an owner allowed to a spender.
    *
    * approve should be called when allowed[_spender] == 0. To decrement
    * allowed value is better to use this function to avoid 2 calls (and wait until
    * the first transaction is mined)
    * From MonolithDAO Token.sol
    * @param _spender The address which will spend the funds.
    * @param _subtractedValue The amount of tokens to decrease the allowance by.
    */
    function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {
        uint oldValue = allowance[msg.sender][_spender];
        if (_subtractedValue > oldValue) {
            allowance[msg.sender][_spender] = 0;
        } else {
            allowance[msg.sender][_spender] = oldValue.sub(_subtractedValue);
        }
        Approval(msg.sender, _spender, allowance[msg.sender][_spender]);
        return true;
    }

    /**
    * @dev Function to mint tokens
    * @param _to The address that will receive the minted tokens.
    * @param _amount The amount of tokens to mint.
    * @return A boolean that indicates if the operation was successful.
    */
    function mint(address _to, uint256 _amount) public onlyOwner returns (bool) {
        totalSupply = totalSupply.add(_amount);
        balanceOf[_to] = balanceOf[_to].add(_amount);
        Mint(_to, _amount);
        Transfer(address(0), _to, _amount, "");
        return true;
    }

    /**
    * @dev Function to burn tokens sender's tokens
    * @param _amount The amount of tokens to burn.
    * @return A boolean that indicates if the operation was successful.
    */
    function burn(uint256 _amount) public returns (bool) {
        require (balanceOf[msg.sender] >= _amount);
        totalSupply = totalSupply.sub(_amount);
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_amount);
        Burn(msg.sender, _amount);
        return true;
    }

    //assemble the given address bytecode. If bytecode exists then the _addr is a contract.
    function isContract(address _addr) private view returns (bool is_contract) {
      uint length;
      assembly {
            //retrieve the size of the code on target address, this needs assembly
            length := extcodesize(_addr)
      }
      return (length>0);
    }

}
