import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Icon } from 'antd'
import { Card } from 'antd'

import styles from './supporters.module.css'
import supporterDemosupportersItemImage from '../images/supporter-demo.jpg';


class Supporters extends Component {
    render() {
        return (
            <div id="supporters" className={styles.supportersWrapper}>
                <h2 className={styles.supportersHeading}>Supporters</h2>
                <Row className={styles.supportersItemListWrapper} gutter={48} type="flex">
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                    <Col className={styles.supportersItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                        <Card
                            hoverable
                            className={styles.card}
                            actions={[<Icon type="twitter" />, <Icon type="linkedin" />, <a target="_blank" href="https://yotutube.com/" rel="noopener noreferrer"><Icon type="github" /></a>]}
                        >
                            <img className={styles.supportersItemImage} alt="" src={supporterDemosupportersItemImage} />
                            <div className={styles.supportersItemTitle}>Ignas Mikalajūnas</div>
                            <div className={styles.supportersItemDescription}>Senior software Engineer</div>

                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Supporters