import React, { Component } from 'react'

import { Col, Row, Icon, Button, Modal } from 'antd'

import styles from './services.module.css'


class Services extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        return (
            <div id="services" className={styles.servicesWrapper}>
                <h2 className={styles.servicesHeading}>With JARO You Can:</h2>
                <Row className={styles.servicesItemListWrapper} gutter={48} type="flex" justify="center">
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="line-chart" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Trade</h3>
                        <p className={styles.servicesItemDescription}>Trading is most important feature of any token, so JARO fully supports it. What's more, we'll have internal market place and I guaranty that it will be listing JARO as it's main asset!</p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="inbox" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>HODL</h3>
                        <p className={styles.servicesItemDescription}>There is no better way to become crypto millionaire, that just HODL. JARO perfectlu suits for that, just don't forget to sell it before 2028.</p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="code-o" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Ask to Code</h3>
                        <p className={styles.servicesItemDescription}>I'm software engineer with experience in Python, JavaScript and Solidity languages. Need senior software developer? Just book Jaro.</p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="notification" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Get Crypto Advice</h3>
                        <p className={styles.servicesItemDescription}>Working on new shiny ICO? Thinking of using Blockchain in you company? But don't know where to start from? With JARO you learn anything about cryto.</p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="shopping-cart" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Pay for Seminar</h3>
                        <p className={styles.servicesItemDescription}>I'm going to organize Blockchain seminars for technical (and not only) people. Having JARO is the only way to book your seat there. </p>
                    </Col>
                    <Col className={styles.servicesLastItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Button className={styles.servicesLearnMoreButton} type="dashed" size="large" onClick={() => this.setModalVisible(true)}>
                            Learn More
                        </Button>
                    </Col>
                </Row>

                <Modal
                    title="SERVICES"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <p>Martial Arts trainings</p>
                    <p>Setuping mining farm</p>
                    <p>Walking your dog</p>
                    <p>Early morning excersises and meditation together</p>
                    <p>ANYTHING you can thing of... (but accorting terms of use)</p>
                </Modal>

            </div>
        );
    }
}

export default Services