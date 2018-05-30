const BigNumber = require('bignumber.js');

const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-bignumber')(BigNumber));

const expect = chai.expect;

const OneToken = new BigNumber("1e18");

const Pay = artifacts.require("./contracts/TestPayContract.sol")
const JaroCoinToken = artifacts.require("./contracts/TestJaroCoinToken.sol");

contract('Pay for services', (accounts) => {
    let token;
    let pay;
    before(async () => {
        token = await JaroCoinToken.new()
        pay = await Pay.new(token.address)
    })

    it('should always work', () => {});

    it('should mint some tokens', async () => {
        const amount = OneToken.mul(777)
        await token.mint(accounts[1], amount, '')
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(amount)
        expect(await token.totalSupply()).to.be.bignumber.equal(amount)
    })

    it('should burn tokens sent to it', async () => {
        await token.sendProxy(pay.address, OneToken.mul(7), '', {
            from: accounts[1],
            value: 0,
            gas: 2000000
        })
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(OneToken.mul(770))
        expect(await token.totalSupply()).to.be.bignumber.equal(OneToken.mul(770))
    })

})
