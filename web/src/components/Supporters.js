import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Icon } from 'antd'
import { Card } from 'antd'

import styles from './supporters.module.css'
import supporterDemoImage from '../images/supporter-demo.jpg';


class Supporters extends Component {
    render() {
        return (
            <div id="supporters">
                <h2 className={styles.h2}>Supporters</h2>
                <Row className={styles.row} gutter={48} type="flex">
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.image} alt="" src={supporterDemoImage} />
                            <div className={styles.title}>Ignas Mikalajūnas</div>
                            <div className={styles.description}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.image} alt="" src={supporterDemoImage} />
                            <div className={styles.title}>Ignas Mikalajūnas</div>
                            <div className={styles.description}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.image} alt="" src={supporterDemoImage} />
                            <div className={styles.title}>Ignas Mikalajūnas</div>
                            <div className={styles.description}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <img className={styles.image} src={supporterDemoImage} alt="" />
                        <h4>Ignas Mikalajūnas</h4>
                        <p>Senior software Engineer</p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <img className={styles.image} src={supporterDemoImage} alt="" />
                        <h4>Tomas Jonušas</h4>
                        <p>Teacher, profesor, management consultant</p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <img className={styles.image} src={supporterDemoImage} alt="" />
                        <h4>Justina Andriuškevičiutė</h4>
                        <p>Public relations and communications advisor</p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <img className={styles.image} src={supporterDemoImage} alt="" />
                        <h4>Justina Andriuškevičiutė</h4>
                        <p>Public relations and communications advisor</p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <img className={styles.image} src={supporterDemoImage} alt="" />
                        <h4>Tomas Jonušas</h4>
                        <p>Teacher, profesor, management consultant</p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <img className={styles.image} src={supporterDemoImage} alt="" />
                        <h4>Ignas Mikalajūnas</h4>
                        <p>Senior software Engineer</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Supporters