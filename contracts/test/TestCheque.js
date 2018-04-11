const BigNumber = require('bignumber.js');

const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-bignumber')(BigNumber));

const expect = chai.expect;

const OneEther = new BigNumber(web3.toWei(1, 'ether'));
const OneToken = new BigNumber("1e18");

const JaroCoinToken = artifacts.require("./TestJaroCoinToken.sol");

contract.only('JaroCoin send via cheque', async (accounts) => {
    let token;
    before(async () => {
        token = await JaroCoinToken.new();
    });

    it('should always work', () => {});

    it('accounts[1] must have 0 balance', async () => {
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(0);
    });

    it('should mint token', async () => {
        const amount = OneToken.mul(777);
        await token.mint(accounts[0], amount, '');

        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(amount);
    });

    it('should successfully send tokens', async () => {
        await token.sendProxy(accounts[1], OneToken.mul(7), '');

        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(OneToken.mul(770));
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(OneToken.mul(7));
    });

    it('should successfully transfer ERC20 tokens', async () => {
        await token.transfer(accounts[1], OneToken.mul(7));

        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(OneToken.mul(763));
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(OneToken.mul(14));
    });

    it('should send using cheque', async () => {
        // const privateKey = '0x7a44e8791fdba705b42b5fd335215757714a3e7c60b9cc867f1318ac601c6f39';

        const _to = accounts[1];
        const _value = 7*1e18;
        const _data = '';
        const _nonce = 112;

        const leftPad = require('left-pad')
        // const secp256k1 = require('secp256k1')
        // const ethUtil = require('ethereumjs-util');

        const hexData = [
            _to.slice(2),
            leftPad((_value).toString(16), 64, 0),
            _data,
            leftPad((_nonce).toString(16), 64, 0)
        ].join('')

        const msg = web3.sha3(hexData, { encoding: 'hex' }).slice(2)

        // const privKey = new Buffer(privateKey.slice(2), 'hex')
        // const signature = ethUtil.bufferToHex(secp256k1.sign(Buffer.from(msg, 'hex'), privKey).signature).slice(2)
        const signature = web3.eth.sign(accounts[0], msg).slice(2);

        const r = '0x' + signature.slice(0,64);
        const s = '0x' + signature.slice(64, 128);
        const v = Number.parseInt(signature.slice(128, 130), 16) + 27;

        await token.sendByCheque(_to, _value, _data, _nonce, v, r, s, {from: accounts[2]});

        expect(await token.balanceOf(accounts[0])).to.be.bignumber.equal(OneToken.mul(756));
        expect(await token.balanceOf(accounts[1])).to.be.bignumber.equal(OneToken.mul(21));
    });

});
