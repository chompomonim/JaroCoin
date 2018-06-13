import React from 'react'

import MediaQuery from 'react-responsive'
import { Col, Row } from 'antd'

import whoIsJaroBackground from '../../images/WhoIsJaro.jpg'
import whoIsJaroLinkedInButton from '../../images/LinkedInLogo.svg'
import styles from './about.module.css'

function WhoIsJaro() {
    const texts = {
        heading: <h2 className={styles.whoHeading}>Who is Jaro?</h2>,
        aboutText: <React.Fragment>
            <div className={styles.whoIsJaroTextItem}>
                Jaro is experienced software engineer, <br />
                IT expert, inovator, blockchain advisor <br />
                and visionary.
            </div>
            <div className={styles.whoIsJaroTextItem}>
                He is as well certificated instructor<br />
                of Korean martial art WonHwaDo <br />
                and practitionair of Chinease<br />
                martial art Iliqchuan.
            </div>
            <div className={styles.whoIsJaroTextItem}>
                Jaro is in Bitcoin since begining of 2013, <br />
                he’s also early Ethereum believer.
            </div>
        </React.Fragment>
    }
    return (
        <React.Fragment>
            <MediaQuery query="(min-width: 768px)">
                <Row type="flex" justify="space-around" align="top">
                    <Col md={{ span: 24 }} lg={{ span: 24 }}>
                        {texts.heading}
                    </Col>
                </Row>
                <Row className={styles.whoIsJaroWrapper} gutter={20} type="flex" justify="center" align="middle">
                    <div className={styles.whoIsJaroBackground}></div>
                    <a className={styles.whoIsJaroLinkedInButtonWrapper} href="https://www.linkedin.com/in/jarolt" target="_blank" rel="noopener noreferrer">
                        <div className={styles.whoIsJaroLinkedInButtonText}>Learn More</div>
                        <img className={styles.whoIsJaroLinkedInButtonImage} src={whoIsJaroLinkedInButton} alt="" />
                    </a>
                    <Col className={styles.whoIsJaroColumnLeft} md={{ span: 10 }} lg={{ span: 10 }}>
                        {texts.aboutText}
                    </Col>
                    <Col className={styles.whoIsJaroColumnRight} md={{ span: 12 }} lg={{ span: 11 }}>
                        <div className={styles.whoIsJaroNumbersItem}>
                            <div className={styles.whoIsJaroNumber}>7</div>
                            <p className={styles.whoIsJaroNumberDescription}>startups <br />co-founded</p>
                        </div>
                        <div className={styles.whoIsJaroItemSeparator}>/</div>
                        <div className={styles.whoIsJaroNumbersItem}>
                            <div className={styles.whoIsJaroNumber}>20+</div>
                            <p className={styles.whoIsJaroNumberDescription}>years of coding <br />experience</p>
                        </div>
                        <div className={styles.whoIsJaroItemSeparator}>/</div>
                        <div className={styles.whoIsJaroNumbersItem}>
                            <div className={styles.whoIsJaroNumber}>15</div>
                            <p className={styles.whoIsJaroNumberDescription}>years in <br />Martial Arts</p>
                        </div>
                    </Col>
                </Row>
            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <Row type="flex" justify="space-around" align="middle">
                    <Col xs={{ span: 24 }} sm={{ span: 24 }}>
                        {texts.heading}
                    </Col>
                </Row>
                <Row gutter={20} type="flex" justify="center" align="top">
                    <Col className={styles.whoIsJaroTextItemMobile} xs={{ span: 21, offset: 1 }} sm={{ span: 20 }}>
                        Jaro is experienced software engineer, IT expert, inovator,  blockchain advisor and visionary.
                    </Col>
                    <Col className={styles.whoIsJaroTextItemMobile} xs={{ span: 21, offset: 1 }} sm={{ span: 20 }}>
                        Jaro is as well certificated instructor of Korean martial art WonHwaDo and practitionair of Chinease martial art Iliqchuan.
                    </Col>
                    <Col className={styles.whoIsJaroTextItemMobile} xs={{ span: 21, offset: 1 }} sm={{ span: 20 }}>
                        Jaro is in Bitcoin since 2012, he’s also early Ethereum
                    </Col>
                    <Col className={styles.whoIsJaroBackgroundMobile} xs={{ span: 24 }} sm={{ span: 24 }}>
                        <img src={whoIsJaroBackground} alt="" />
                    </Col>
                </Row>
            </MediaQuery>
        </React.Fragment>
    )
}

export default WhoIsJaro
