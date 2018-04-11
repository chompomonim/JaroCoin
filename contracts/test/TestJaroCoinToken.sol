pragma solidity ^0.4.21;

import '../contracts/JaroCoinToken.sol';

contract TestJaroCoinToken is JaroCoinToken {
    function interfaceAddr(address addr, string ifaceLabel) internal constant returns(address) {
        // We're not implementing ERC777TokensSender in tests
        if (!isRegularAddress(addr) && keccak256(ifaceLabel) == keccak256("ERC777TokensRecipient")) {
            return addr;
        } else {
            return 0x0;
        }
    }

    function sendProxy(address _to, uint256 _amount, bytes _userData) public {
        send(_to, _amount, _userData);
    }

}
