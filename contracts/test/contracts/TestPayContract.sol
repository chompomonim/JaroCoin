pragma solidity ^0.4.23;

import 'contracts/Pay.sol';

contract TestPayContract is Pay {

    constructor(address _token) Pay(_token) public {
    }

    function setInterfaceImplementation(string ifaceLabel, address impl) internal {
    }

}
