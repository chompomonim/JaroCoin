import React, { Component } from 'react'

import { Col, Row, Button, Icon, Modal } from 'antd'

import styles from './faq.module.css'


class Faq extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        return (
            <div className={styles.faqWrapper}>
                <h2 className={styles.faqHeading}>Questions and Answers (FAQ)</h2>
                <Row className={styles.faqItemListWrapper} gutter={48} type="flex">
                    <Col className={styles.faqItemWrapper} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.faqItemTitle}>Is JaroCoin just one more ICO?</h3>
                        <p className={styles.faqItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.faqItemWrapper} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.faqItemTitle}>Are you really will sell all of your time?</h3>
                        <p className={styles.faqItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.faqItemWrapper} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.faqItemTitle}>How whole process look like?</h3>
                        <p className={styles.faqItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.faqItemWrapper} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.faqItemTitle}>How can I buy JaroCoin</h3>
                        <p className={styles.faqItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.faqItemWrapper} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.faqItemTitle}>What is the Price of JaroCoin</h3>
                        <p className={styles.faqItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.faqLastItemWrapper} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <div className={styles.faqMoreQuestionsButtonWrapper}>
                            <Button className={styles.faqMoreQuestionsButton} type="primary" size="large" onClick={() => this.setModalVisible(true)}>More Questions?</Button>
                        </div>
                    </Col>
                </Row>

                <Modal
                    // title="THE FRESH NEWS CAN BE FOUND HERE:"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <h3 className={styles.faqModalHeading}>Feel Free to Contact Me:</h3>
                    <div className={styles.faqModalItemsWrapper}>
                        <div className={styles.faqModalItem}>
                            <a style={{ color: '#37c6f5' }} href="https://twitter.com/chompomonim" target="_blank" rel="noopener noreferrer"><Icon type="twitter" /> Twitter</a>
                        </div>
                        <div className={styles.faqModalItem}>
                            <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/jarolt" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" /> LinkedIn</a>
                        </div>
                        <div className={styles.faqModalItem}>
                            <a style={{ color: '#dd4d42' }} href="https://plus.google.com/+JaroSatkevic" target="_blank" rel="noopener noreferrer">{/*<Icon type="google-plus" />*/} Google+</a>
                        </div>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default Faq