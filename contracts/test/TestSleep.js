const BigNumber = require('bignumber.js')

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('chai-bignumber')(BigNumber))

const expect = chai.expect

const OneEther = new BigNumber(web3.toWei(1, 'ether'))
const OneToken = new BigNumber("1e18")
const One = new BigNumber("1")
const OneDay = 60 * 60 * 24

const JaroCoin = artifacts.require("test/TestJaroCoinToken.sol")
const Sleep = artifacts.require("test/TestSleepContract.sol")

contract('Sleep contract', async (accounts) => {
    let token
    const owner = accounts[2]
    const dailyTokensToBurn = new BigNumber('9e18')
    before(async () => {
        token = await JaroCoin.new()
        sleep = await Sleep.new(token.address, dailyTokensToBurn)
    })

    it('should always work', () => {})

    it('must have 0 balance', async () => {
        expect(await token.balanceOf(sleep.address)).to.be.bignumber.equal(0)
    })

    it('should get new token', async () => {
        const amount = OneToken.mul(777777)
        await token.mint(sleep.address, amount, '')
        expect(await token.balanceOf(sleep.address)).to.be.bignumber.equal(amount)
    })

    it('should burn tokens for passed 4 days', async () => {
        const sleepTokens = await token.balanceOf(sleep.address)
        const days = OneDay * 4

        const lastBurn =  await sleep.lastBurn()
        await sleep.setNow(lastBurn.add(days))

        await sleep.burnTokens()
        expect(await token.balanceOf(sleep.address)).to.be.bignumber.equal(sleepTokens.sub(dailyTokensToBurn.mul(4)))
    })

})
