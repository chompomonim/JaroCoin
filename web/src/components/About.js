import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Divider } from 'antd'
import { Button, Icon } from 'antd'

import MediaQuery from 'react-responsive'

import styles from './about.module.css'

// import jaroCoinLogo from '../images/JaroCoinLogoGold.png'
import jaroCoinLogo from '../images/JaroCoinCoin.jpg'
import whoIsJaroBackground from '../images/WhoIsJaro.jpg'
import whoIsJaroLinkedInButton from '../images/LinkedInLogo.svg'
import tokenDistributionInfographic from '../images/TokenDistributionInfographics.jpg'

class About extends Component {

    render() {
        return (
            <div>
                <MediaQuery query="(min-width: 768px)">
                    {/* <h2 className={styles.h2}>About</h2> */}
                    <Row type="flex" justify="space-around" align="top">
                        <Col md={{ span: 24 }} lg={{ span: 24 }}>
                            <h2 className={styles.whoIsJaroTitle}>Who is Jaro?</h2>
                        </Col>
                    </Row>
                    <Row className={styles.whoIsJaroWrapper} gutter={20} type="flex" justify="center" align="middle">
                        <div className={styles.whoIsJaroBackground}></div>
                        <a className={styles.whoIsJaroLinkedInButtonWrapper} href="https://www.linkedin.com/in/jarolt" target="_blank" rel="noopener noreferrer">
                            <div className={styles.whoIsJaroLinkedInButtonText}>Learn More</div>
                            <img className={styles.whoIsJaroLinkedInButtonImage} src={whoIsJaroLinkedInButton} alt="" />
                        </a>
                        <Col className={styles.whoIsJaroColumnLeft} md={{ span: 10 }} lg={{ span: 10 }}>
                            <div className={styles.whoIsJaroTextItem}>
                                Jaro is experienced software engineer, <br />
                                IT expert, inovator, blockchain advisor <br />
                                and visionary.
                            </div>
                            <div className={styles.whoIsJaroTextItem}>
                                Jaro is as well certificated instructor<br />
                                of Korean martial art WonHwaDo <br />
                                and practitionair of Chinease<br />
                                martial art Iliqchuan.
                            </div>
                            <div className={styles.whoIsJaroTextItem}>
                                Jaro is in Bitcoin since 2012, <br /> 
                                he’s also early Ethereum
                            </div>
                        </Col>
                        <Col className={styles.whoIsJaroColumnRight} md={{ span: 12 }} lg={{ span: 11 }}>
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
                    {/* <div className={styles.buttonSkills}>
                        <Button type="primary" size="large" icon="pie-chart" href="https://linkedin.com/in/jarolt" target="_blank">
                            Skills
                        </Button>
                    </div> */}
                </MediaQuery>
                <MediaQuery query="(max-width: 767px)">
                    {/* <h2 className={styles.h2}>About</h2> */}
                    <Row type="flex" justify="space-around" align="middle">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }}>
                            <h2 className={styles.whoIsJaroTitle}>Who is Jaro?</h2>
                        </Col>
                    </Row>
                    <Row gutter={20} type="flex" justify="center" align="top">
                        <Col className={styles.whoIsJaroBackgroundMobile} xs={{ span: 24 }} sm={{ span: 24 }}>
                            <img src={whoIsJaroBackground} alt="" />
                        </Col>
                        <Col className={styles.whoIsJaroTextItemMobile} xs={{ span: 21, offset: 1 }} sm={{ span: 20 }}>
                                Jaro is experienced software engineer, IT expert, inovator,  blockchain advisor and visionary.
                        </Col>
                        <Col className={styles.whoIsJaroTextItemMobile} xs={{ span: 21, offset: 1 }} sm={{ span: 20 }}>
                                Jaro is as well certificated instructor of Korean martial art WonHwaDo and practitionair of Chinease martial art Iliqchuan.
                        </Col>
                        <Col className={styles.whoIsJaroTextItemMobile} xs={{ span: 21, offset: 1 }} sm={{ span: 20 }}>
                                Jaro is in Bitcoin since 2012, he’s also early Ethereum
                        </Col>
                    </Row>
                    <Row gutter={20} type="flex" justify="center" align="top">
                        <Col className={styles.whoIsJaroNumbersItemMobile} xs={{ span: 9 }} sm={{ span: 7 }}>
                            <div className={styles.whoIsJaroNumberMobile}>15</div>
                            <p className={styles.whoIsJaroNumberDescriptionMobile}>years in <br />Martial <br />Arts</p>
                        </Col>
                        <Col className={styles.whoIsJaroNumbersItemMobile} xs={{ span: 12 }} sm={{ span: 7 }}>
                            <div className={styles.whoIsJaroNumberMobile}>20+</div>
                            <p className={styles.whoIsJaroNumberDescriptionMobile}>years of coding <br />experience</p>
                        </Col>
                        <Col className={styles.whoIsJaroNumbersLastItemMobile} xs={{ span: 10 }} sm={{ span: 7 }}>
                            <div className={styles.whoIsJaroNumberMobile}>7</div>
                            <div className={styles.whoIsJaroNumberDescriptionMobile}>startups <br />co-founded</div>
                        </Col>
                    </Row>
                    <div id="what-is-jarocoin" className={styles.whatIsJaroCoinAnchor}></div>
                    {/* <div className={styles.buttonSkills}>
                        <Button type="primary" size="large" icon="pie-chart" href="https://linkedin.com/in/jarolt" target="_blank">
                            Skills
                        </Button>
                    </div> */}
                </MediaQuery>

                
                <div className={styles.whatIsJaroCoinWrapper}>
                    <Row type="flex" justify="space-around" align="top">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                            <h2 className={styles.whatIsJaroCoinTitle}>What is JaroCoin?</h2>
                        </Col>
                    </Row>
                    <Row className={styles.whatIsJaroCoin1stRow} gutter={50} type="flex" justify="center" align="middle">
                        <Col className={styles.whatIsJaroCoin1stRowColumnLeft} xs={{ span: 20 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <p className={styles.whatIsJaroCoinIntro}>JaroCoin (JARO) is ERC777 token on Rootstock (bitcoin sidechain) an is 100% backed by Jaro Time! </p>
                            <p className={styles.whatIsJaroCoinQuote}>“I am selling my time for the better, more technologically advanced <br />
                            and more educated world. This coin is the only way to get my attention, advice and services.” <br />
                            - Jaro Šatkevič, founder of JaroCoin</p>
                        </Col>
                        <Col className={styles.whatIsJaroCoin1stRowColumnRight} xs={{ span: 18 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 5 }}>
                            <img className={styles.whatIsJaroCoinImage} src={jaroCoinLogo} alt="" />
                        </Col>
                    </Row>
                    <Row className={styles.whatIsJaroCoin2ndRow} type="flex" justify="center" align="middle">
                        <Col className={styles.whatIsJaroCoin2ndRowColumnLeft} xs={{ span: 23, offset: 2 }} sm={{ span: 12 }} md={{ span: 10 }} lg={{ span: 8, offset: 2}}>
                            <div><Icon type="plus-circle-o" /> Higly valuble investment (?)</div>
                            <div><Icon type="plus-circle-o" /> True utility coin (?)</div>
                        </Col>
                        <Col className={styles.whatIsJaroCoin2ndRowColumnRight} xs={{ span: 23, offset: 2 }} sm={{ span: 12 }} md={{ span: 10 }} lg={{ span: 8 }}>
                            <div><Icon type="plus-circle-o" /> Real limited supply (?)</div>
                            <div><Icon type="plus-circle-o" /> Coin value is 100% baked (?)</div>
                        </Col>
                    </Row>
                </div>

                <Divider id="token-distribution-model" className={styles.divider} />
                
                <div className={styles.tokenDistributionWrapper}>
                    <Row justify="center" align="center" type="flex">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                            <h2 className={styles.tokenDistributionTitle}>Token distribution</h2>
                        </Col>
                    </Row>
                    <Row justify="center" align="center" gutter={20} type="flex">
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }} className={styles.tokenDistributionInfographic}>
                            <div className={styles.tokenDistributionInfographicWrapper}>
                                <div className={styles.tokenDistributionText1stItem}>
                                    <div className={styles.tokenDistributionTextItemTitle}>20% ICO</div>
                                    <div className={styles.tokenDistributionTextItemDescription}>
                                        it's part of Jaro time<br />
                                        whith you can get!
                                    </div>
                                </div>
                                <div className={styles.tokenDistributionText2ndItem}>
                                    <div className={styles.tokenDistributionTextItemTitle}>11% personal time</div>
                                    <div className={styles.tokenDistributionTextItemDescription}>
                                        each person needs time for<br />
                                        self education, hobby and<br />
                                        meeting friends
                                    </div>
                                </div>

                                <img className={styles.tokenDistributionImage} src={tokenDistributionInfographic} alt="" />

                                <div className={styles.tokenDistributionText3rdItem}>
                                    <div className={styles.tokenDistributionTextItemTitle}>4% pre-ico</div>
                                    <div className={styles.tokenDistributionTextItemDescription}>
                                        tokens reserved for my pre ico<br />
                                        liabilities and for early supporters<br />
                                        of this project
                                    </div>
                                </div>
                                <div className={styles.tokenDistributionText4thItem}>
                                    <div className={styles.tokenDistributionTextItemTitle}>25% family time</div>
                                    <div className={styles.tokenDistributionTextItemDescription}>
                                        family is important part of my<br />
                                        live, I'd like give my family at<br />
                                        least 1/4 of all my time
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 14 }} className={styles.tokenDistributionDescription}>
                                1 JARO = 1 second of Jaro time = 0.00001 Bitcoin<br />
                                There are only 21 000 000* JARO
                            <div className={styles.buttonLearnMoreWhitepaper}>
                                <Button type="primary" size="large" icon="book" href="#" target="_blank">Learn more in Whitepaper</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default About