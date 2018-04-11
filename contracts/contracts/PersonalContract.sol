pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "erc777/contracts/ERC777TokensRecipient.sol";

import "./JaroCoinToken.sol";

contract PersonalTime is Ownable, ERC777TokensRecipient {
    using SafeMath for uint256;

    uint256 public lastBurn;                         // Time of last sleep token burn
    uint256 public dailyTime;                        // Tokens to burn per day
    uint256 public debt = 0;                         // Debt which will be not minted during next sale period
    uint256 public protect = 0;                      // Tokens which were transfered in favor of future days
    JaroCoinToken public token;

    event ReceivedTokens(address indexed from, uint amount);

    function PersonalTime(address _token, uint256 _dailyTime) public {
        token = JaroCoinToken(_token);
        lastBurn = getNow();
        dailyTime = _dailyTime;
    }

    // Reject any ethers send to this address
    function () external payable {
        revert();
    }

    function burnTokens() public returns (uint256) {
        uint256 sec = getNow().sub(lastBurn);
        uint256 tokensToBurn = 0;

        // // TODO convert into uint64 for saving gas purposes
        if (sec >= 1 days) {
            uint256 d =  sec.div(86400);
            tokensToBurn = d.mul(dailyTime);

            if (protect >= tokensToBurn) {
                protect = protect.sub(tokensToBurn);
            } else {
                token.burn(tokensToBurn.sub(protect), "");
                protect = 0;
            }

            lastBurn = lastBurn.add(d.mul(86400));
        }

        return tokensToBurn;
    }

    function transfer(address _to, uint256 _amount) public onlyOwner {
        protect = protect.add(_amount);
        debt = debt.add(_amount);
        token.transfer(_to, _amount);
    }

    // Function needed for automated testing purposes
    function getNow() internal view returns (uint256) {
        return now;
    }

    // ERC777 tokens receiver callback
    function tokensReceived(address operator, address from, address to, uint amount, bytes userData, bytes operatorData) public {
        debt = (debt >= amount ? debt.sub(amount) : 0);
        emit ReceivedTokens(from, amount);
    }
}