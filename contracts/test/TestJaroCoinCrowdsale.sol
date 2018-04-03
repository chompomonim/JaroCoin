pragma solidity ^0.4.21;

import '../contracts/JaroCoinCrowdsale.sol';
import './TestSleepContract.sol';

contract TestJaroCoinCrowdsale is JaroCoinCrowdsale {
    uint256 testNow;

    function TestJaroCoinCrowdsale(address _owner) JaroCoinCrowdsale(_owner) public {
    }

    function setNow(uint256 _now) public {
        testNow = _now;

        TestSleepContract(sleepContract).setNow(_now);
        TestSleepContract(familyContract).setNow(_now);
        TestSleepContract(personalContract).setNow(_now);
    }

    function getNow() internal view returns (uint256) {
        return testNow;
    }

    function getNowTest() public view returns (uint256) {
        return getNow();
    }

    function createJaroSleep(address _token, uint256 _dailyTime) public returns (JaroSleep) {
        return new TestSleepContract(_token, _dailyTime);
    }
}
