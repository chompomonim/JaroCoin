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
                <h2 className={styles.servicesHeading}>Services</h2>
                <Row className={styles.servicesItemListWrapper} gutter={48} type="flex" justify="center">
                    <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <h3 className={styles.servicesSubtitle}>With JaroCoin You Can</h3> 
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="line-chart" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Trade</h3>
                        <p className={styles.servicesItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="bar-chart" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>HODL</h3>
                        <p className={styles.servicesItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="code-o" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Ask to Code</h3>
                        <p className={styles.servicesItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="notification" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Get Crypto Advice</h3>
                        <p className={styles.servicesItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.servicesItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Icon type="shopping-cart" className={styles.servicesItemIcon} />
                        <h3 className={styles.servicesItemTitle}>Pay for Webinar</h3>
                        <p className={styles.servicesItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
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
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>

            </div>
        );
    }
}

export default Services