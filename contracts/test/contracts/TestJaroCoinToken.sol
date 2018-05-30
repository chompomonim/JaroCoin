pragma solidity ^0.4.23;

import 'contracts/JaroCoinToken.sol';

contract TestJaroCoinToken is JaroCoinToken {

    function sendProxy(address _to, uint256 _amount, bytes _userData) public {
        send(_to, _amount, _userData);
    }

}
