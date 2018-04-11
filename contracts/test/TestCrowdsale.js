const BigNumber = require('bignumber.js')

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('chai-bignumber')(BigNumber))

const expect = chai.expect

const OneEther = new BigNumber(web3.toWei(1, 'ether'))
const OneToken = new BigNumber("1e8")
const One = new BigNumber("1")

const JaroCoin = artifacts.require("test/TestJaroCoinToken.sol")
const Crowdsale = artifacts.require("test/TestJaroCoinCrowdsale.sol")
const Family = artifacts.require("test/TestPersonalContract")

function getTime(date) {
    return Math.floor(new Date(date).getTime() / 1000)
}

contract('JaroCoinCrowdsale', async (accounts) => {
    let crowdsale
    let token
    const satoshiPrice = new BigNumber("1000")                       // 0.00001 BTC = 1000 satoshi
    const conversionRate = new BigNumber("5882e13")                  // Satoshi per Ethereum = 0.0582 BTC/ETH
    const weiPrice = OneEther.div(conversionRate).mul(satoshiPrice)  // wei per token
    const tokensPerSatoshi = new BigNumber("100000e10")
    const owner = accounts[2]
    const firstBuyTokens = new BigNumber('5882.352e18')
    const secondBuyTokens = new BigNumber('7000e18')
    const familyOwner = accounts[4]
    const wallet = '0x1111111111111111111111111111111111111111'      // WALLET where we collect ethereum

    before(async () => {
        token = await JaroCoin.new()
        crowdsale = await Crowdsale.new(owner, token.address, familyOwner, wallet)

        // Make crowdsale contract owner of token
        await token.transferOwnership(crowdsale.address)
    })

    it('should always work', () => {})

    it('should have accounts[2] as owner', async () => {
        expect(await crowdsale.owner()).to.be.equal(accounts[2])
    })

    it('token should have crowdsale as owner', async () => {
        expect(await token.owner()).to.be.equal(crowdsale.address)
    })

    it('should start token sale', async () => {
        await crowdsale.startSale(getTime('2018-04-11'), {from: owner})
        expect(await crowdsale.isActive()).to.be.true
    })

    it('should set date after crowdsale start', async () => {
        // Set time after ICO start
        await crowdsale.setNow(getTime('2018-04-12'))
    })

    it('accounts[1] must have 0 balance', async () => {
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(0)
    })

    it('should accept funds and mint 5882 tokens for 1 eth', async () => {
        await crowdsale.sendTransaction({
            from: accounts[0],
            value: OneEther,
            gas: 2000000
        })
        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(firstBuyTokens)
    })

    it.skip('wallet should have 1 eth on its balance', async () => {
        const walletBalance = web3.eth.getBalance(wallet)
        expect(walletBalance).to.be.bignumber.equal(OneEther)
    })

    it('should set new conversionRate', async () => {
        const newConversionRate = new BigNumber("7000e3")   // satoshi/eth, 0.07 BTC/ETH
        await crowdsale.updateConvertionRate(newConversionRate, {from: owner})
        expect(await crowdsale.conversionRate()).to.be.bignumber.equal(OneEther.div(newConversionRate).floor())
    })

    it('should give proper tokens amount for new conversion rate', async () => {
        await crowdsale.sendTransaction({
            from: accounts[1],
            value: OneEther,
            gas: 2000000
        })
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(secondBuyTokens)
    })

    it('should close token sale', async () => {
        expect(await crowdsale.isActive()).to.be.true

        await crowdsale.closeSale({from: owner})

        expect(await crowdsale.isActive()).to.be.false
    })

    it('should start new period when token sale is not active', async () => {
        const lastSaleStart = await crowdsale.saleStartTime()
        const oneDay = new BigNumber(60 * 60 * 24)
        await crowdsale.setNow(lastSaleStart.add(oneDay.mul(31)))

        const startTime = lastSaleStart.add(oneDay.mul(40))
        await crowdsale.startSale(startTime, {from : owner})
        expect(await crowdsale.saleStartTime()).to.be.bignumber.equal(startTime)
    })

    it('sleep contract owns 40% of all tokens', async () => {
        const expectedSleepTokens = new BigNumber('8400000e18')
        expect(await token.balanceOf(await crowdsale.sleepContract())).to.be.bignumber.equal(expectedSleepTokens)
    })

    it('family should owns 25% of all tokens', async () => {
        const expectedFamilyTokens = new BigNumber('5250000e18')
        expect(await token.balanceOf(await crowdsale.familyContract())).to.be.bignumber.equal(expectedFamilyTokens)
    })

    it('personal should be 15% of all tokens', async () => {
        const expectedPersonalTokens = new BigNumber('3150000e18')
        expect(await token.balanceOf(await crowdsale.personalContract())).to.be.bignumber.equal(expectedPersonalTokens)
    })

    it('should have 4187117.648 tokens to mint', async () => {
        const maxITOTokens = new BigNumber('4200000e18')
        const expectedToMint = maxITOTokens.sub(firstBuyTokens).sub(secondBuyTokens)
        const tokensToMint = await crowdsale.tokensToMint()
        expect(tokensToMint).to.be.bignumber.equal(expectedToMint)
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
        const expectedTokens = new BigNumber('4187117.648e18')
        const actualConversionRate = new BigNumber("7000e13")
        const spendForTokens = expectedTokens.div(tokensPerSatoshi).mul(OneEther.div(actualConversionRate))
        const expectedRefund = amount.sub(spendForTokens)

        expect(await token.balanceOf(accounts[3])).to.be.bignumber.equal(expectedTokens)
        expect(await crowdsale.isActive()).to.be.false
        expect(currentAccountBalance.lte(initialAccountBalance.sub(spendForTokens))).to.be.true
        expect(currentAccountBalance.gte(initialAccountBalance.sub(amount))).to.be.true
    })

    it('should start new sale and mint proper amount of family tokens', async () => {
        // Family transfers it's time
        const family = Family.at(await crowdsale.familyContract())
        const transferAmount = new BigNumber('3600e18')

        // Let's burn tokens from past
        await family.burnTokens()

        // // Transfer tokens
        await family.transfer(accounts[1], transferAmount, {from: accounts[4]})
        const expectedAccountOneBalance = secondBuyTokens.add(transferAmount)
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(expectedAccountOneBalance)

        expect(await family.protect()).to.be.bignumber.equal(transferAmount)

        const initialTokenAmount = await token.balanceOf(family.address)
        const dailyFamilyTime = new BigNumber('21600e18')
        const expectedTokenAmount = initialTokenAmount.sub(dailyFamilyTime).add(transferAmount)

        const lastBurn = await family.lastBurn()
        const oneDay = new BigNumber(60 * 60 * 24)
        await crowdsale.setNow(lastBurn.add(oneDay))
        await family.burnTokens()

        expect(await token.balanceOf(family.address)).to.be.bignumber.equal(expectedTokenAmount)
        expect(await family.protect()).to.be.bignumber.equal(new BigNumber(0))

        // // Second transfer and start new sale
        const lastSaleStart = await crowdsale.saleStartTime()
        const newNow = lastSaleStart.add(oneDay.mul(31))
        await crowdsale.setNow(newNow)

        await family.transfer(accounts[1], transferAmount, {from: familyOwner})
        await family.burnTokens()

        await crowdsale.closeSale({from: owner})
        await family.burnTokens()
        await crowdsale.startSale(newNow.add(1), {from : owner})
        expect(await crowdsale.saleStartTime()).to.be.bignumber.equal(newNow.add(1))
    })

})
