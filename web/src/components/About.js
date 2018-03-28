import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Divider } from 'antd'
import { Button, Icon } from 'antd'

import styles from './about.module.css'

import jaroCoinDemoImage from '../images/jarocoin-demo.jpg'
import tokenDistributionDemoImage from '../images/tokendistribution-demo.jpg'

class About extends Component {

    render() {

        return (
            <div>
                {/* <h2 className={styles.h2}>About</h2> */}
                <h2 className={styles.whoIsJaroTitle}>Who is Jaro?</h2>
                <div className={styles.whoIsJaroWrapper}>
                    <div className={styles.whoIsJaroGradientOverlay}></div>
                        <div className={styles.whoIsJaroBackground}></div>
                        <div className={styles.whoIsJaroItem}>
                            <div className={styles.whoIsJaroNumber}>340+</div>
                            <p className={styles.whoIsJaroDescription}>Projects Completed</p>
                        </div>
                        <div className={styles.whoIsJaroItemSeparator}>/</div>
                        <div className={styles.whoIsJaroItem}>
                            <div className={styles.whoIsJaroNumber}>7</div>
                            <p className={styles.whoIsJaroDescription}>Startups</p>
                        </div>
                        <div className={styles.whoIsJaroItemSeparator}>/</div>
                        <div className={styles.whoIsJaroItem}>
                            <div className={styles.whoIsJaroNumber}>11</div>
                            <p className={styles.whoIsJaroDescription}>Years in Business</p>
                    </div>
                </div>
                {/* <div className={styles.buttonSkills}>
                    <Button type="primary" size="large" icon="pie-chart" href="https://linkedin.com/in/jarolt" target="_blank">
                        Skills
                    </Button>
                </div> */}

                <h2 className={styles.whatIsJaroCoinTitle}>What is JaroCoin?</h2>
                <Row className={styles.whatIsJaroCoinWrapper} gutter={20} type="flex">
                    <Col className={styles.whatIsJaroCoinColumnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
                        <div className={styles.whatIsJaroCoinDescription}>
                            <p>JARO is ticker for crypto token called JaroCoin, the only coin which is 100% backed by Jaro time!</p>
                            <p>I am selling my time for the better, more technologically advanced and more educated world.</p>
                            <p>It’s my life. It’s my coin.<br /> JARO Coin is the only way to get my attention, advice and services.</p>
                            <ul>
                                <li>Higly valuble investment (? - you can Hodl them because my time is running and becomming more and more expensive).</li>
                                <li>True utility coin (? - after using your JAROs they will be destroyed and not available to anyone anymore, as my time was).</li>
                                <li>Truely limited supply - (? - JARO supply is limited as time is)</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className={styles.whatIsJaroCoinColumnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={jaroCoinDemoImage} alt="" />
                        </div>
                    </Col>
                </Row>

                <Divider className={styles.divider} />

                <h2 className={styles.tokenDistributionTitle}>Token distribution</h2>
                <Row className={styles.tokenDistributionWrapper} gutter={20} type="flex">
                    <Col className={styles.tokenDistributionColumnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 10 }}>
                        <div className={styles.tokenDistributionImageWrapper}>
                            <img className={styles.image} src={tokenDistributionDemoImage} alt="" />
                        </div>
                    </Col>
                    <Col className={styles.tokenDistributionColumnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 14}}>
                        <div className={styles.tokenDistributionDescription}>
                            <p>1 JARO = 1 Jaro second = 0.0001 bitcoin</p>
                            <ul>
                                <li>Real utility token, 100% backed by my time</li>
                                <li>Buying precious time</li>
                                <li>Selling (trading) my time for the better world</li>
                                <li>Its my life. Its my coin</li>
                                <li>Humanity changes. Money too.</li>
                            </ul>
                            <p>There are only 21 000 000* JARO</p>
                        </div>
                        <div className={styles.buttonLearnMoreWhitepaper}>
                            <Button type="primary" size="large" icon="book" href="#" target="_blank">Learn more in Whitepaper</Button>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default About