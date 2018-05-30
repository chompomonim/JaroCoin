pragma solidity ^0.4.23;

import 'contracts/SleepContract.sol';

contract TestSleepContract is JaroSleep {
    uint256 testNow;

    constructor(address _token, uint256 _dailyTime, uint256 _lastBurn) JaroSleep(_token, _dailyTime, _lastBurn) public {
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
