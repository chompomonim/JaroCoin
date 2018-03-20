import React, { Component } from 'react'

import { Col, Row, Button, Icon } from 'antd'

import styles from './faq.module.css'


class Faq extends Component {
    render() {
        return (
            <div id="faq">
                <h2 className={styles.h2}>Questions and Answers (FAQ)</h2>
                <Row className={styles.row} gutter={48} type="flex">
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.title}>Is JaroCoin just one more ICO?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.title}>Are you really will sell all of your time?</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.title}>How whole process look like?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.title}>How can I buy JaroCoin</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.title}>What is the Price of JaroCoin</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <div className={styles.button}>
                            <Button className={styles.buttonInstance} type="primary" size="large">More Questions <Icon type="question" /></Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Faq