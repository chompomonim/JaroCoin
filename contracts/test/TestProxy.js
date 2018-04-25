const BigNumber = require('bignumber.js')

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('chai-bignumber')(BigNumber))

const expect = chai.expect

const OneEther = new BigNumber(web3.toWei(1, 'ether'))

const JaroCoin = artifacts.require("test/TestJaroCoinToken.sol")
const Crowdsale = artifacts.require("test/TestJaroCoinCrowdsale")
const TestCrowdsale = artifacts.require("test/TestCrowdsale")
const Proxy = artifacts.require("../contracts/CrowdsaleProxy")

function getTime(date) {
    return Math.floor(new Date(date).getTime() / 1000)
}

contract('Proxy', (accounts) => {
    let token
    let crowdsale
    let proxy
    let proxiedCrowdsale
    const wallet = '0x1111111111111111111111111111111111111111'      // WALLET where we collect ethereum

    before (async () => {
        token = await JaroCoin.new()
        crowdsale = await Crowdsale.new(accounts[2], token.address, wallet, wallet)

        proxy = await Proxy.new(crowdsale.address)
        await proxy.___initialize(token.address, wallet, wallet)
        proxiedCrowdsale = Crowdsale.at(proxy.address)

        await token.transferOwnership(proxy.address)
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

    it('should have proper target', async () => {
        const expectedName = await proxiedCrowdsale.name()
        expect(expectedName).to.be.equal('Crowdsale')

        const expectedTargetAddress = await proxy.___proxyTarget()
        expect(expectedTargetAddress).to.be.equal(crowdsale.address)
    })

    it('should set new target', async () => {
        const newCrowdsale = await TestCrowdsale.new(accounts[2])
        await proxy.___upgradeTo(newCrowdsale.address, {from: accounts[1]})
        const expectedName = await proxiedCrowdsale.name()
        expect(expectedName).to.be.equal('NewCrowdsale')
    })

    it('should fail setting new target when crowdsale is active', async () => {
        // Make crowdsale active
        await proxiedCrowdsale.startSale(1, {from: accounts[0]})
        expect(await proxiedCrowdsale.isActive()).to.be.true

        // Setting target back to Crowdsale should eventually fail
        await expect(proxy.___upgradeTo(crowdsale.address, {from: accounts[1]})).to.be.eventually.rejected
    })

    it('should change target back to original crowdsale', async () => {
        // Move back to proper crowdsale
        await proxiedCrowdsale.closeSale({from: accounts[0]})
        await proxy.___upgradeTo(crowdsale.address, {from: accounts[1]})
        expect(await proxiedCrowdsale.name()).to.be.equal('Crowdsale')
    })

    it('should start token sale again', async () => {
        // Start token sale
        await proxiedCrowdsale.startSale(getTime('2018-04-11'), {from: accounts[0]})
        expect(await proxiedCrowdsale.isActive()).to.be.true
        expect(await proxiedCrowdsale.rate()).to.be.bignumber.equal(new BigNumber('100000e10'))
    })

    it('should set time after ICO start', async () => {
        await proxiedCrowdsale.setNow(getTime('2018-04-12'))
    })

    it('account 3 should have 0 balance', async () => {
        expect(await token.balanceOf(accounts[3])).to.be.bignumber.equal(0)
    })

    it('should accept funds and mint tokens', async () => {
        await proxiedCrowdsale.sendTransaction({
            from: accounts[3],
            value: OneEther,
            gas: 2000000
        })
        expect(await token.balanceOf(accounts[3])).to.be.bignumber.equal(new BigNumber('5882.352e18'))
    })

    it.skip('should have proper balance in WALLET', async () => {
        // should transfer funds into proper WALLET
        const walletBalance = web3.eth.getBalance(wallet)
        expect(walletBalance).to.be.bignumber.equal(OneEther)
    })
})
