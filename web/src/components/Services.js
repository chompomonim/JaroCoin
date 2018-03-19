import React, { Component } from 'react'

import { Col, Row, Icon } from 'antd'

import styles from './services.module.css'


class Services extends Component {
    render() {
        return (
            <div id="services">
                <h2 className={styles.h2}>Services</h2>
                <h3 className={styles.h3}>With JaroCoin You Can</h3>
                <Row className={styles.row} gutter={48} type="flex">
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3>Trade</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3>HODL</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3>Ask to Code</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3>Get Crypto Advice</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3>Pay for Webinar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.columnLast} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <Icon style={{ fontSize: '2rem' }} type="search">Learn More</Icon>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Services