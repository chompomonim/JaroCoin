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
                    <Row className={styles.whoIsJaroWrapper} gutter={20} type="flex">
                        <Col className={styles.whoIsJaroColumnLeft} xs={{ span: 20 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 9 }}>
                            <div className={styles.whoIsJaroTextItem}>
                                Jaro is experienced software engineer, <br />
                                IT expert, inovator,  blockchain advisor <br />
                                and visionary.
                            </div>
                            <div className={styles.whoIsJaroTextItem}>
                                Jaro is as well certificated instructor<br />
                                of Korean martial art WonHwaDo and practitionair of Chinease martial art Iliqchuan.
                            </div>
                            <div className={styles.whoIsJaroTextItem}>
                                Jaro is in Bitcoin since 2012, <br /> 
                                he’s also early Ethereum
                            </div>
                        </Col>
                        <Col className={styles.whoIsJaroColumnRight} xs={{ span: 22 }} sm={{ span: 24 }} md={{ span: 13 }} lg={{ span: 13 }}>
                            <div className={styles.whoIsJaroNumbersItem}>
                                <div className={styles.whoIsJaroNumber}>15</div>
                                <p className={styles.whoIsJaroNumberDescription}>years in <br />Martial Arts</p>
                            </div>
                            <div className={styles.whoIsJaroItemSeparator}>/</div>
                            <div className={styles.whoIsJaroNumbersItem}>
                                <div className={styles.whoIsJaroNumber}>20+</div>
                                <p className={styles.whoIsJaroNumberDescription}>years of coding <br />experience</p>
                            </div>
                            <div className={styles.whoIsJaroItemSeparator}>/</div>
                            <div className={styles.whoIsJaroNumbersItem}>
                                <div className={styles.whoIsJaroNumber}>7</div>
                                <p className={styles.whoIsJaroNumberDescription}>startups <br />co-founded</p>
                            </div>
                        </Col>
                    </Row>
                    <div id="what-is-jarocoin" className={styles.whatIsJaroCoinAnchor}></div>
                </div>
                {/* <div className={styles.buttonSkills}>
                    <Button type="primary" size="large" icon="pie-chart" href="https://linkedin.com/in/jarolt" target="_blank">
                        Skills
                    </Button>
                </div> */}

                <h2 className={styles.whatIsJaroCoinTitle}>What is JaroCoin?</h2>
                <Row className={styles.whatIsJaroCoinWrapper} gutter={20} type="flex">
                    <p className={styles.whatIsJaroCoinIntro}>JaroCoin (JARO) is ERC777 token on Rootstock (bitcoin sidechain) an is 100% backed by Jaro Time! </p>
                    <p className={styles.whatIsJaroCoinQuote}>“I am selling my time for the better, more technologically advanced <br />
                    and more educated world. This coin is the only way to get my attention, advice and services.” <br />
                    - Jaro Šatkevič, founder of JaroCoin</p>
                    <Col className={styles.whatIsJaroCoinColumnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <div><Icon type="plus-circle-o" /> Higly valuble investment (?)</div>
                        <div><Icon type="plus-circle-o" /> True utility coin (?)</div>
                    </Col>
                    <Col className={styles.whatIsJaroCoinColumnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <div><Icon type="plus-circle-o" /> Real limited supply (?)</div>
                        <div><Icon type="plus-circle-o" /> Coin value is 100% baked (?)</div>
                    </Col>
                </Row>

                <Divider id="token-distribution-model" className={styles.divider} />

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