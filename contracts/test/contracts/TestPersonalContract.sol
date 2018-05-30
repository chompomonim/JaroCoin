pragma solidity ^0.4.23;

import 'contracts/PersonalContract.sol';

contract TestPersonalContract is PersonalTime {
    uint256 testNow;

    constructor(address _token, uint256 _dailyTime, uint256 _lastBurn) PersonalTime(_token, _dailyTime, _lastBurn) public {
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
