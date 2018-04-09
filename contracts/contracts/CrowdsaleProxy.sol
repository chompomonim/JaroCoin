pragma solidity 0.4.21;

/**
 * The CrowdsaleProxy contract does this and that...
 */
contract CrowdsaleProxy {
    bytes32 constant TARGET_POSITION = keccak256("CrowdsaleProxy.target");
    bytes32 constant OWNER_POSITION = keccak256("CrowdsaleProxy.owner");

    modifier _onlyProxyOwner() {
        require(msg.sender == ___proxyOwner());
        _;
    }

    function CrowdsaleProxy() public {
        bytes32 position = OWNER_POSITION;
        assembly {
            sstore(position, caller)
        }
    }

    function () public payable {
        bytes32 _storageTargetAddress = TARGET_POSITION;
        assembly {
            let _target := sload(_storageTargetAddress)
            calldatacopy(0x0, 0x0, calldatasize)
            let success := delegatecall(sub(gas, 10000), _target, 0x0, calldatasize, 0, 0)
            let retSz := returndatasize
            returndatacopy(0, 0, retSz)
            switch success
            case 0 {
                revert(0, retSz)
            }
            default {
                return(0, retSz)
            }
        }
    }

    function ___proxyOwner() public view returns (address owner) {
        bytes32 position = OWNER_POSITION;
        assembly {
            owner := sload(position)
        }
    }

    function ___setTarget(address newTarget) _onlyProxyOwner public {
        bytes32 position = TARGET_POSITION;
        assembly {
            sstore(position, newTarget)
        }
    }

    function ___setProxyOwner(address newOwner) _onlyProxyOwner public {
        bytes32 position = OWNER_POSITION;
        assembly {
            sstore(position, newOwner)
        }
    }

}
