pragma solidity ^0.4.18;

import '../contracts/JaroCoinCrowdsale.sol';

contract TestJaroCoinCrowdsale is JaroCoinCrowdsale {
    uint256 testNow;

    function TestJaroCoinCrowdsale(address _owner) JaroCoinCrowdsale(_owner) public {
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
