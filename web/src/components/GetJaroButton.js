import React, { Component } from 'react'

import { Button, Modal } from 'antd'

import styles from './getJaroButton.module.css'
import qrCodeImage from '../images/smart-contract-qr.png'


class GetJaroButton extends Component {

    state = {
        modalVisible: false
    }

    setModalVisible(visibility) {
        this.setState({ modalVisible: visibility })
    }

    render() {
        return (
            <div className={styles.getJaroButtonWrapper}>
                <Button
                    className={styles.getJaroButton}
                    type="primary"
                    size="large"
                    onClick={() => this.setModalVisible(true)}>GET JARO</Button>

                <Modal
                    title="Get JaroCoin"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    width={800}
                    footer={null}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}>
                    <div className={styles.getJaroModal}>
                        <h2>Payment Method - ETH (Smart Contract)</h2>
                        <div className={styles.modalText}>
                            <p>Use this payment method to send ETH from ERC20 or ERC777 Token
                            Compatible Wallet (e.g. <a href="https://www.myetherwallet.com" target="_blank">MyEtherWallet</a>) to JaroCoinCrowsale smart contract.</p>
                        </div>
                        <div>
                            <img src={qrCodeImage} alt="Smart contract QR code" width={200}/>
                        </div>
                        <div className={styles.addressField}>0x85aC27E4124863492DB18EAFBb358102Cad8fc96</div>
                        <div className={styles.crowdsaleRules}>
                            <ul className={styles.crowdsaleRulesList}>
                               <li className={styles.crowdsaleRulesList}>DO NOT send ETH directly from any exchange addresses!</li>
                               <li className={styles.crowdsaleRulesList}>Use MyEtherWallet, MetaMask or other compatible wallets.</li>
                               <li className={styles.crowdsaleRulesList}>Set gas limit 200,000 GAS</li>
                               <li className={styles.crowdsaleRulesList}>JaroCoin token source code you have <a href="https://etherscan.io/address/0x2e5fb91975c3fb6f6d61c5859314e7c53af07912#code" target="_blank"> find here.</a></li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default GetJaroButton