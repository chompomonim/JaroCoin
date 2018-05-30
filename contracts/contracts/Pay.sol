pragma solidity ^0.4.23;

import "eip820/contracts/ERC820Implementer.sol";

interface ERC777TokensRecipient {
    function tokensReceived(address operator, address from, address to, uint amount, bytes userData, bytes operatorData) external;
}

contract BurnableToken {
    event Burned(address indexed operator, address indexed from, uint256 amount, bytes userData, bytes operatorData);
    function burn(uint256 _amount, bytes _userData) public {
        emit Burned(msg.sender, msg.sender, _amount, _userData, "");
    }
}

/**
 * The Pay contract helps people to burn JaroCoin tokens (pay for Jaro services)
 * without knowing how to touch `burn` function from JaroCoin Token smart contract.
 */
contract Pay is ERC820Implementer, ERC777TokensRecipient {
    BurnableToken public token;

    event Payed(address operator, address from, address to, uint amount, bytes userData, bytes operatorData);

    constructor(address _token) public {
        setInterfaceImplementation("ERC777TokensRecipient", this);
        token = BurnableToken(_token);
    }

    // ERC777 tokens receiver callback
    function tokensReceived(address operator, address from, address to, uint amount, bytes userData, bytes operatorData) external {
        token.burn(amount, userData);
        emit Payed(operator, from, to, amount, userData, operatorData);
    }
}
