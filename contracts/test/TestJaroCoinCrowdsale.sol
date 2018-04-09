pragma solidity ^0.4.21;

import '../contracts/JaroCoinCrowdsale.sol';
import './TestSleepContract.sol';
import './TestPersonalContract.sol';

contract TestJaroCoinCrowdsale is JaroCoinCrowdsale {
    uint256 testNow;

    function TestJaroCoinCrowdsale(address _owner, address _token) JaroCoinCrowdsale(_owner, _token) public {
    }

    function setNow(uint256 _now) public {
        testNow = _now;

        TestSleepContract(sleepContract).setNow(_now);
        TestPersonalContract(familyContract).setNow(_now);
        TestPersonalContract(personalContract).setNow(_now);
    }

    function getNow() internal view returns (uint256) {
        return testNow;
    }

    function getNowTest() public view returns (uint256) {
        return getNow();
    }

    function createJaroSleep(address _token, uint256 _dailyTime) internal returns (JaroSleep) {
        return new TestSleepContract(_token, _dailyTime);
    }

    function  createPersonalTime(address _token, uint256 _dailyTime) internal returns(PersonalTime) {
        return new TestPersonalContract(_token, _dailyTime);
    }

}
