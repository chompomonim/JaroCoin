const BigNumber = require('bignumber.js')

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('chai-bignumber')(BigNumber))

const expect = chai.expect

const JaroCoin = artifacts.require("../contracts/JaroCoinToken")
const TestCoin = artifacts.require("test/TestCoin")
const Proxy = artifacts.require("../contracts/CrowdsaleProxy")

contract.only('CrowdsaleProxy', (accounts) => {
    let token
    let proxy
    let proxiedToken
    before (async () => {
        token = await JaroCoin.new()
        proxy = await Proxy.new()
        proxiedToken = JaroCoin.at(proxy.address)
    })

    it('should always work', () => {})

    it('should have proper proxy owner', async () => {
        const owner = await proxy.___proxyOwner()
        expect(owner).to.be.equal(accounts[0])
    })

    it('should correctly transfer ownership', async () => {
        await proxy.___setProxyOwner(accounts[1])
        const newOwner = await proxy.___proxyOwner()
        expect(newOwner).to.be.equal(accounts[1])
    })

    it('should fail when not owner is setting new owner', async () => {
        await expect(proxy.___setProxyOwner(accounts[2], {from: accounts[0]})).to.be.eventually.rejected
    })

    it('should set proper target', async () => {
        await proxy.___setTarget(token.address, {from: accounts[1]})
        const expectedName = await proxiedToken.name()
        expect(expectedName).to.be.equal('JaroCoin')
    })

    it('should set new target', async () => {
        const coin = await TestCoin.new()
        await proxy.___setTarget(coin.address, {from: accounts[1]})
        const expectedName = await proxiedToken.name()
        expect(expectedName).to.be.equal('NewContract')
    })
})