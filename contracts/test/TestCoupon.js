const BigNumber = require('bignumber.js');

const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-bignumber')(BigNumber));

const expect = chai.expect;

const OneEther = new BigNumber(web3.toWei(1, 'ether'))


const JaroCoin = artifacts.require("test/contracts/TestJaroCoinToken.sol")
const Crowdsale = artifacts.require("test/contracts/TestJaroCoinCrowdsale.sol")

function getTime(date) {
    return Math.floor(new Date(date).getTime() / 1000)
}

contract('Crowdsale with Coupon', (accounts) => {
    let crowdsale
    let token
    const owner = accounts[2]
    const familyOwner = accounts[4]
    const wallet = '0x1111111111111111111111111111111111111111'      // WALLET where we collect ethereum
    const firstBuyTokens = new BigNumber('5882.352e18')

    function generateCoupon(bonus, timeStamp) {
        const leftPad = require('left-pad')
        const secp256k1 = require('secp256k1')
        const ethUtil = require('ethereumjs-util')

        const _timeStamp = timeStamp
        const _bonus = bonus

        const hexData = [
            leftPad((_timeStamp).toString(16), 64, 0),
            leftPad((_bonus).toString(16), 64, 0)
        ].join('')

        const trueHexData = [
            leftPad((_timeStamp).toString(16), 64, 0),
            leftPad((_bonus).toString(16), 4, 0)
        ].join('')

        const msg = web3.sha3(trueHexData, { encoding: 'hex' }).slice(2)
        const signature = web3.eth.sign(owner, msg).slice(2);

        const r = signature.slice(0, 64)
        const s = signature.slice(64, 128)
        const v = leftPad(
            (Number.parseInt(signature.slice(128, 130), 16) + 27).toString(16),
            64,
            0
        )

        const payload = '0x3ae9133d' + hexData + v + r + s;

        return payload
    }

    before(async () => {
        token = await JaroCoin.new()
        crowdsale = await Crowdsale.new(owner, token.address, familyOwner, wallet)

        // Make crowdsale contract owner of token
        await token.transferOwnership(crowdsale.address)
    })

    it('should always work', () => {})

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

    it('should mint more tokens when transfer with coupon', async () => {
        const coupon = generateCoupon(550, getTime('2018-04-15'))

        await crowdsale.sendTransaction({
            from: accounts[1],
            value: OneEther,
            gas: 2000000,
            data: coupon
        })

        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(firstBuyTokens.mul(6.5))
    })
})
