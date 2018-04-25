const BigNumber = require('bignumber.js')

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('chai-bignumber')(BigNumber))

const expect = chai.expect

const OneEther = new BigNumber(web3.toWei(1, 'ether'))
const OneToken = new BigNumber("1e8")
const One = new BigNumber("1")

const JaroCoin = artifacts.require("../contracts/JaroCoinToken")
const Crowdsale = artifacts.require("test/TestJaroCoinCrowdsale.sol");

contract('JaroCoinCrowdsale', async (accounts) => {
    let crowdsale
    let token
    const satoshiPrice = new BigNumber("1000")                       // 0.00001 BTC = 1000 satoshi
    const conversionRate = new BigNumber("5882e3")                   // Satoshi per Ethereum = 0.0582 BTC/ETH
    const weiPrice = OneEther.div(conversionRate).mul(satoshiPrice)       // wei per token
    const tokensPerSatoshi = new BigNumber("100000")
    const owner = accounts[2]

    before(async () => {
        crowdsale = await Crowdsale.new(accounts[2])
        token = await JaroCoin.at(await crowdsale.token())

        // Set time after ICO start
        await crowdsale.setNow(1522585000)
    })

    it('should always work', () => {})

    it('accounts[1] must have 0 balance', async () => {
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(0)
    })

    it('should have account 3 as owner', async () => {
        expect(await crowdsale.owner()).to.be.equal(accounts[2])
    })

    it('should accept funds and mint 5882 tokens for 1 eth', async () => {
        await crowdsale.sendTransaction({
            from: accounts[0],
            value: OneEther,
            gas: 2000000
        })
        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(new BigNumber('5882.352e8'))
    })

    it('should set new conversionRate', async () => {
        const newConversionRate = new BigNumber("7000e3")   // satoshi/eth, 0.07 BTC/ETH
        await crowdsale.updateConvertionRate(newConversionRate, {from: accounts[2]})
        expect(await crowdsale.conversionRate()).to.be.bignumber.equal(OneEther.div(newConversionRate).floor())
    })

    it('should give proper tokens amount for new conversion rate', async () => {
        await crowdsale.sendTransaction({
            from: accounts[1],
            value: OneEther,
            gas: 2000000
        })

        expect(await token.balanceOf(accounts[1])).to.not.bignumber.equal(new BigNumber('5882.352e8'))
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(new BigNumber('7000e8'))
    })

    it('should close token sale', async () => {
        expect(await crowdsale.isActive()).to.be.true

        await crowdsale.closeSale({from: accounts[2]})

        expect(await crowdsale.isActive()).to.be.false
    })

    it('should start new period when token sale is not active', async () => {
        const start = await crowdsale.saleStartTime()
        const oneDay = new BigNumber(60 * 60 * 24)
        await crowdsale.setNow(start.add(oneDay.mul(31)))

        const startTime = start.add(oneDay.mul(40))
        await crowdsale.startSale(startTime, {from : accounts[2]})
        expect(await crowdsale.saleStartTime()).to.be.bignumber.equal(startTime)
    })

    it('should close ico and get refunded for overpaid ether', async () => {
        const amount = OneEther.mul(3000)
        const gas = 2000000
        const initialAccountBalance = web3.eth.getBalance(accounts[3])

        const start = await crowdsale.saleStartTime()
        await crowdsale.setNow(start.add(1))
        await crowdsale.sendTransaction({
            from: accounts[3],
            value: amount,
            gas: gas
        })

        const currentAccountBalance = web3.eth.getBalance(accounts[3])
        // const expectedTokens = new BigNumber('4187117.648e8')
        const expectedTokens = new BigNumber('837423.5296e8')
        const actualConversionRate = new BigNumber("7000e3")
        const spendForTokens = expectedTokens.div(tokensPerSatoshi).mul(OneEther.div(actualConversionRate))
        const expectedRefund = amount.sub(spendForTokens)

        expect(await token.balanceOf(accounts[3])).to.be.bignumber.equal(expectedTokens)
        expect(await crowdsale.isActive()).to.be.false
        expect(currentAccountBalance.lte(initialAccountBalance.sub(spendForTokens))).to.be.true
        expect(currentAccountBalance.gte(initialAccountBalance.sub(amount))).to.be.true
    })
})
