pragma solidity 0.4.23;

import "eip820/contracts/ERC820Implementer.sol";
import "./JaroCoinToken.sol";

/**
 * The Pay contract helps people to burn JaroCoin tokens (pay for Jaro services)
 * without knowing how to touch `burn` function from JaroCoin Token smart contract.
 */
contract Pay is ERC820Implementer, ERC777TokensRecipient {
    JaroCoinToken public token;

    event Payed(address operator, address from, address to, uint amount, bytes userData, bytes operatorData);

    constructor(address _token) public {
        setInterfaceImplementation("ERC777TokensRecipient", this);
        token = JaroCoinToken(_token);
    }

    // ERC777 tokens receiver callback
    function tokensReceived(address operator, address from, address to, uint amount, bytes userData, bytes operatorData) external {
        token.burn(amount, userData);
        emit Payed(operator, from, to, amount, userData, operatorData);
    }

}
