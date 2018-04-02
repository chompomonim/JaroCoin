import React, { Component } from 'react'

import { Row, Col } from 'antd'
import { Button, Icon } from 'antd'
import { Modal } from 'antd'


import styles from './countdownCompletionMessage.module.css'

class CountdownCompletionMessage extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        return (
            <div>
                <Row className={styles.countdownCompletionMessageWrapper} gutter={20} type="flex" justify="center" align="middle">
                    <Col className={styles.countdownCompletionMessage} span={24}>
                        <div className={styles.countdownCompletionMessageTitle}>
                            All JARO coins were used
                        </div>
                        <div className={styles.countdownCompletionMessageDescription}>
                            If you need more information about this project, <br />please click button below
                        </div>
                        
                        <Button className={styles.buyJaroButton} size="large" onClick={() => this.setModalVisible(true)}>
                            Contact Jaro
                        </Button>
                    </Col>
                </Row>

                <Modal
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <h3 className={styles.countdownCompletionModalHeading}>Contact Jaro with:</h3>
                    <div className={styles.countdownCompletionModalItemsWrapper}>
                        <div className={styles.countdownCompletionModalItem}>
                            <a style={{ color: '#37c6f5' }} href="https://twitter.com/chompomonim" target="_blank" rel="noopener noreferrer"><Icon type="twitter" /> Twitter</a>
                        </div>
                        <div className={styles.countdownCompletionModalItem}>
                            <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/jarolt" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" /> LinkedIn</a>
                        </div>
                        <div className={styles.countdownCompletionModalItem}>
                            <a style={{ color: '#dd4d42' }} href="https://plus.google.com/+JaroSatkevic" target="_blank" rel="noopener noreferrer">{/*<Icon type="google-plus" />*/} Google+</a>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default CountdownCompletionMessage