pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "erc777/contracts/ERC777TokensRecipient.sol";
import "./JaroCoinToken.sol";

contract JaroSleep is ERC777TokensRecipient {
    using SafeMath for uint256;

    uint256 public lastBurn;                         // Time of last sleep token burn
    uint256 public dailyTime;                        // Tokens to burn per day
    JaroCoinToken public token;

    event ReceivedTokens(address indexed from, uint amount);

    function JaroSleep(address _token, uint256 _dailyTime) public {
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
    function tokensReceived(address operator, address from, address to, uint amount, bytes userData, bytes operatorData) public {
        emit ReceivedTokens(from, amount);
    }
}
