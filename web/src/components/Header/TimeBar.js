import React, { Component } from 'react'
import Web3 from 'web3'
import { BigNumber } from 'bignumber.js'

import { Progress } from 'antd'
import { Row, Col } from 'antd'
import { Button } from 'antd'
import { Modal } from 'antd'
import { Icon } from 'antd'

import Countdown from 'react-countdown-now';

import GetJaroButton from '../GetJaroButton'
import CountdownCompletionMessage from './CountdownCompletionMessage'

import styles from './timeBar.module.css'

// Web3 setup
// -----------
let web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/jPfrhToAbx8f5682NUPz"))
}

// Initialize Contract
// -----------
// const abiPath = require('path').join(__dirname, 'JaroCoinToken.json')
// const source = require('fs').readFileSync(abiPath)

// TODO Load smart-contract address from config
async function getAmount() {
    const response = await fetch('http://jarocoin.com/JaroCoinToken.json')
    const contractABI = (await response.json())['abi']
    const contract = new web3.eth.Contract(contractABI, '0x2E5fb91975C3fB6F6D61C5859314E7c53AF07912')
    return await contract.methods.totalSupply().call()
}

const ProgressBarBlock = ({completed}) => {
    const granularity = new BigNumber('1e18')
    const total = new BigNumber('21000000e18')
    const amount = new BigNumber(completed)
    const percent = Math.floor((amount.div(total).toNumber()) * 100)
    const coinsLeft = total.minus(amount).div(granularity).toFormat(0)
    return (
        <div className={styles.timeBarWrapper}>
            <Row gutter={20} type="flex" justify="start" align="middle">
            <Col className={styles.timeHeadingWrapper} xs={{ span: 22 }} sm={{ span: 22, offset: 1 }} md={{ span: 16, pull: 1 }} lg={{ span: 23 }}>
                <div className={styles.timeBarHeading}>
                    <div className={styles.timeBarNumber}>{coinsLeft}</div>
                    <div className={styles.timeBarTitle}> coins left</div><br />
                </div>
             </Col>
            </Row>
            <Row gutter={20} type="flex" justify="center" align="middle">
                <Col className={styles.timeBar} xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 16 }} lg={{ span: 16 }}>
                    <Progress className={styles.progressBar} percent={percent} showInfo={true} strokeWidth={68} />
                </Col>
                <Col className={styles.timeBarButton} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 7 }} lg={{ span: 4 }}>
                    <div className={styles.getJaroButtonContainer}>
                        <GetJaroButton />
                    </div>
                </Col>
            </Row>
        </div>
    );

}

class TimeBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            completed: 0
        }
    }

    componentDidMount() {
        getAmount().then(res => this.setState({completed: res}))
    }

    render() {
        return (
            <div>
                <ProgressBarBlock completed={this.state.completed} />
            </div>
        );
    }
}

export default TimeBar
