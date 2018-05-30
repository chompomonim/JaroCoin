const JaroCoin = artifacts.require("./JaroCoinToken.sol")
const JaroCoinCrowdsale = artifacts.require("./JaroCoinCrowdsale.sol")
const CrowdsaleProxy = artifacts.require("./CrowdsaleProxy.sol")
const EIP820Registry = require("eip820");

const owner = '0xa465495956083b62b5a2a864ff6a00bc0034d16d'
const familyOwner = '0x807EcA0E76075253816F0361E149b8F2D6F7B42d'
const personalOwner = '0x83A63Ee3E80716391b5C77E7e06c3d75e64597f4'

module.exports = function(deployer, network, accounts) {
    if (network === 'development') {
        const Web3Latest = require("web3");
        const web3latest = new Web3Latest('http://localhost:8545');
        return EIP820Registry.deploy(web3latest, accounts[0]);
    }

    deployer.deploy(JaroCoin).then(() => {
        return deployer.deploy(JaroCoinCrowdsale)
    }).then(() => {
        return deployer.deploy(CrowdsaleProxy, JaroCoinCrowdsale.address)
    }).then(() => {
        return CrowdsaleProxy.deployed()
    }).then((proxy) => {
        return proxy.___initialize(JaroCoin.address, familyOwner, personalOwner)
    }).then(() => {
        return JaroCoin.deployed()
    }).then((token) => {
        return token.transferOwnership(CrowdsaleProxy.address)
    }).then(() => {
        return CrowdsaleProxy.deployed()
    }).then((proxy) => {
        const proxiedCrowdsale = JaroCoinCrowdsale.at(proxy.address)
        return proxiedCrowdsale.startSale(1523855000)
    })
}
