import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Button } from 'antd'
import { Divider } from 'antd'

import TypistComponent from './TypistComponent'
import CountdownTimer from './CountdownTimer'
import TimeBar from './TimeBar'
import GetJaroButton from './GetJaroButton'

import MediaQuery from 'react-responsive'

import styles from './headerContent.module.css'




class HeaderContent extends Component {

    render() {
        return(
            <div className={styles.headerContentWrapper}>
            <div className={styles.headerContentBackground}></div>
                <Row className={styles.headingWrapper} gutter={20} type="flex">
                    <Col className={styles.headlineColumn} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 10 }}>
                        <h1 className={styles.heading}>Jaro Coin</h1>
                            <div className={styles.headline}>
                                <TypistComponent />
                            </div>
                        </Col>
                </Row>
                <Row className={styles.countDownWrapper} gutter={20} type="flex">
                    <Col className={styles.countDownColumn} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                         <CountdownTimer />               
                    </Col>
                </Row>

                <Row className={styles.timeBarElementsWrapper} gutter={20} type="flex">
                    <Col className={styles.timeBarColumnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
                        <TimeBar />
                    </Col>
                    <Col className={styles.timeBarColumnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
                        <div className={styles.getJaroButtonContainer}>
                            <GetJaroButton  />
                        </div>
                    </Col>
                </Row>

                <Divider className={styles.divider} />

                <Row className={styles.introWrapper} gutter={40} type="flex">
                    <Col className={styles.videoWrapper} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 14 }}>
                        <div className={styles.videoContainer}>
                            {/* Youtube params: ?showinfo=0&rel=0&controls=1&cc_load_policy=1 */}
                            <iframe className={styles.videoIframe} src="https://www.youtube.com/embed/Y3xsa9k0kb8?color=white&showinfo=0&rel=0&controls=1&cc_load_policy=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>
                    </Col>
                    <Col className={styles.introColumnCenter} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 10 }}>
                        <h3 className={styles.introSectionTitle}>INTRO</h3>
                        <p className={styles.introDescription}>JaroCoin is a token fully backed by my most precious asset – time. JaroCoin is the only way to get my attention, advice or service.</p>
                        <p className={styles.introDescription}>Private crypto currency (token) is a model to play for majority future – oriented professionals from attorneys at law to house – keepers. This project is fully open source, so you can create yours as well!</p>
                        <p className={styles.introDescription}>Humanity changes. Money too.</p>
                        <div className={styles.buttonWrapper}>
                            <Button className={styles.button} type="primary" size="large" icon="book">Read Whitepaper</Button>
                        </div>
                    </Col>
                </Row>

            </div>
            
        );
    }
}

export default HeaderContent