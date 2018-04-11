pragma solidity ^0.4.21;

import '../contracts/JaroCoinToken.sol';

contract TestJaroCoinToken is JaroCoinToken {
    function interfaceAddr(address addr, string ifaceLabel) internal constant returns(address) {
        return 0x0;
    }

    function sendProxy(address _to, uint256 _amount, bytes _userData) public {
        send(_to, _amount, _userData);
    }

}
