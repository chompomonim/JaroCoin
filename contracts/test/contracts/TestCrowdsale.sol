pragma solidity ^0.4.23;

import "contracts/Ownable.sol";

contract TestCrowdsale is Ownable {
    string public constant name = "NewCrowdsale";
    bool public isActive;
    uint256 startTime;

    constructor(address _owner) public {
        transferOwnership(_owner);
    }

    function closeSale() public onlyOwner {
        isActive = false;
    }

    function startSale(uint256 _startTime) public onlyOwner {
        isActive = true;
        startTime = _startTime;
    }
}
