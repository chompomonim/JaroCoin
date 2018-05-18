pragma solidity ^0.4.23;

import 'contracts/PersonalContract.sol';

contract TestPersonalContract is PersonalTime {
    uint256 testNow = now;

    constructor(address _token, uint256 _dailyTime) PersonalTime(_token, _dailyTime) public {
    }

    function setInterfaceImplementation(string ifaceLabel, address impl) internal {

    }

    function setNow(uint256 _now) public {
        testNow = _now;
    }

    function getNow() internal view returns (uint256) {
        return testNow;
    }

    function getNowTest() public view returns (uint256) {
        return getNow();
    }
}
