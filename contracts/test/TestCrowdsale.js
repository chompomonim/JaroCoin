const BigNumber = require('bignumber.js')

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('chai-bignumber')(BigNumber))

const expect = chai.expect

const OneEther = new BigNumber(web3.toWei(1, 'ether'))
const OneToken = new BigNumber("1e8")
const One = new BigNumber("1")

const JaroCoin = artifacts.require("../contracts/JaroCoinToken")
const Crowdsale = artifacts.require("../contracts/JaroCoinCrowdsale.sol")

contract('JaroCoin send via cheque', async (accounts) => {
    let crowdsale
    let token
    const satoshiPrice = new BigNumber("1000")                       // 0.00001 BTC = 1000 satoshi
    const conversionRate = new BigNumber("5882e3")                   // Satoshi per Ethereum = 0.0582 BTC/ETH
    const weiPrice = OneEther.div(conversionRate).mul(satoshiPrice)  // wei per token

    before(async () => {
        crowdsale = await Crowdsale.new(accounts[2])
        token = await JaroCoin.at(await crowdsale.token())
    })

    it('should always work', () => {})

    it('accounts[1] must have 0 balance', async () => {
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(0)
    })

    it('should have account 3 as owner', async () => {
        const owner = await crowdsale.owner()
        expect(owner).to.be.equal(accounts[2])
    })

    it('should accept funds and mint 5882 tokens for 1 eth', async () => {
        const amount = OneEther.mul(1)

        await crowdsale.sendTransaction({
            from: accounts[0],
            value: amount,
            gas: 2000000
        })

        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(5882)
    })

    it('should set new conversionRate', async () => {
        const newConversionRate = new BigNumber("7000e3")   // 0.07 BTC/ETH

        await crowdsale.updateConvertionRate(newConversionRate, {from: accounts[2]})
        expect(await crowdsale.conversionRate()).to.be.bignumber.equal(OneEther.div(newConversionRate).floor())
    })

    it('should give proper tokens amount for new conversion rate', async () => {
        const amount = OneEther.mul(1)

        await crowdsale.sendTransaction({
            from: accounts[1],
            value: amount,
            gas: 2000000
        })

        expect(await token.balanceOf(accounts[1])).to.not.bignumber.equal(5882)
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(7000)
    })
})
