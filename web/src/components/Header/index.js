import React from 'react'

import { Col, Row, Button, Divider } from 'antd'
import MediaQuery from 'react-responsive'

import TypistComponent from './TypistComponent'
import CountdownTimer from './CountdownTimer'

import styles from './headerContent.module.css'

function HeaderContent() {
    return (
        <div className={styles.headerContentWrapper}>
            <MediaQuery query="(min-width: 1200px)">
                <div className={styles.headerContentBackgroundXL}></div>
            </MediaQuery>
            <MediaQuery query="(min-width: 992px) and (max-width: 1199px)">
                <div className={styles.headerContentBackgroundLG}></div>
            </MediaQuery>
            <MediaQuery query="(min-width: 768px) and (max-width: 991px)">
                <div className={styles.headerContentBackgroundMD}></div>
            </MediaQuery>
            <MediaQuery query="(min-width: 577px) and (max-width: 767px)">
                <div className={styles.headerContentBackgroundSM}></div>
            </MediaQuery>

            <MediaQuery query="(min-width: 1200px)">
                <Row className={styles.headingWrapper} gutter={20} type="flex">
                    <Col className={styles.headlineColumn} sm={{ span: 19 }} md={{ span: 15 }} lg={{ span: 14 }} xl={{ span: 10 }} xxl={{ span: 9 }}>
                        <h1 className={styles.heading}>Jaro Coin</h1>
                            <div className={styles.headline}>
                                <TypistComponent />
                            </div>
                    </Col>
                </Row>
            </MediaQuery>
                <MediaQuery query="(min-width: 577px) and (max-width: 1199px)">
                <Row className={styles.headingWrapper} gutter={20} type="flex">
                        <Col className={styles.headlineColumn} md={{ span: 15 }} lg={{ span: 14 }}>
                        <h1 className={styles.headingMobileLG}>Jaro Coin</h1>
                            <div className={styles.headlineMobileLG}>
                                <TypistComponent />
                            </div>
                    </Col>
                </Row>
            </MediaQuery>
            <MediaQuery query="(max-width: 576px)">
                <Row className={styles.headingWrapper} gutter={20} type="flex">
                    <Col className={styles.headlineColumn} xs={{ span: 24 }}>
                        <h1 className={styles.headingMobileXS}>Jaro Coin</h1>
                            <div className={styles.headlineMobileXS}>
                                <TypistComponent />
                            </div>
                    </Col>
                </Row>
            </MediaQuery>

            <MediaQuery query="(min-width: 577px)">
                <div className={styles.transparentBottomOverlay}></div>
            </MediaQuery>

            <Row className={styles.countDownWrapper} gutter={20} type="flex">
                <Col className={styles.countDownColumn} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                     <CountdownTimer />
                </Col>
            </Row>

            <Divider id="intro" className={styles.divider} />

            <Row className={styles.introWrapper} gutter={40} type="flex">
                <Col className={styles.videoWrapper} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 14 }}>
                    <div className={styles.videoContainer}>
                        {/* Youtube params: ?showinfo=0&rel=0&controls=1&cc_load_policy=1 */}
                        <iframe className={styles.videoIframe} src="https://www.youtube.com/embed/Y3xsa9k0kb8?color=white&showinfo=0&rel=0&controls=1&cc_load_policy=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                        </iframe>
                    </div>
                </Col>
                <Col className={styles.introColumnCenter} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 10 }}>

                    <MediaQuery query="(min-width: 992px)">
                        <h3 className={styles.introSectionTitle}>INTRO</h3>
                    </MediaQuery>

                    <p className={styles.introDescription}>JaroCoin is a token fully backed by my most precious asset – time. JaroCoin is the only way to get my attention, advice or service.</p>
                    <p className={styles.introDescription}>Private crypto currency (token) is a model to play for majority future – oriented professionals from attorneys at law to house – keepers. This project is fully open source, so you can create yours as well!</p>
                    <p className={styles.introDescription}>Humanity changes. Money too.</p>
                    <div className={styles.buttonWrapper} style={{dislay: 'none'}}>
                        <Button className={styles.button} type="primary" size="large" icon="book">Read Whitepaper</Button>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default HeaderContent