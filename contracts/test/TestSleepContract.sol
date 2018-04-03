pragma solidity ^0.4.21;

import '../contracts/SleepContract.sol';

contract TestSleepContract is JaroSleep {
    uint256 testNow = now;

    function TestSleepContract(address _token, uint256 _dailyTime) JaroSleep(_token, _dailyTime) public {
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
