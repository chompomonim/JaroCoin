pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "eip820/contracts/ERC820Implementer.sol";

import "./JaroCoinToken.sol";

contract JaroSleep is ERC820Implementer, ERC777TokensRecipient {
    using SafeMath for uint256;

    uint256 public lastBurn;                         // Time of last sleep token burn
    uint256 public dailyTime;                        // Tokens to burn per day
    JaroCoinToken public token;

    event ReceivedTokens(address operator, address from, address to, uint amount, bytes userData, bytes operatorData);

    constructor(address _token, uint256 _dailyTime, uint256 _lastBurn) public {
        setInterfaceImplementation("ERC777TokensRecipient", this);
        token = JaroCoinToken(_token);
        lastBurn = _lastBurn;
        dailyTime = _dailyTime;
    }

    // Reject any ethers send to this address
    function () external payable {
        revert();
    }

    function burnTokens() public returns (uint256) {
        uint256 sec = getNow().sub(lastBurn);
        uint256 tokensToBurn = 0;

        // TODO convert into uint64 for saving gas purposes
        if (sec >= 1 days) {
            uint256 d =  sec.div(86400);
            tokensToBurn = d.mul(dailyTime);
            token.burn(tokensToBurn, "");
            lastBurn = lastBurn.add(d.mul(86400));
        }

        return tokensToBurn;
    }

    // Function needed for automated testing purposes
    function getNow() internal view returns (uint256) {
        return now;
    }

    // ERC777 tokens receiver callback
    function tokensReceived(address operator, address from, address to, uint amount, bytes userData, bytes operatorData) external {
        emit ReceivedTokens(operator, from, to, amount, userData, operatorData);
    }
}
