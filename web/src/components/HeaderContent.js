import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Button } from 'antd'
import { Divider } from 'antd'

import TypistComponent from './TypistComponent'
import CountdownTimer from './CountdownTimer'

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
                <Row className={styles.introWrapper} gutter={20} type="flex">
                    <Col className={styles.introColumnCenter} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 18 }}>
                        <h3 className={styles.introSectionTitle}>INTRO</h3>
                        <p className={styles.introDescription}>JaroCoin is a token fully backes by my most precious asset – time. JaroCoin is the only way to get my attention, advice or service.</p>
                        <p className={styles.introDescription}>Private crypto currency (token) is a model to play for majority future – oriented professionals from attorneys at law to house – keepers. This project is fully open source, so you can create yours as well!</p>
                        <p className={styles.introDescription}>Humanity changes. Money too.</p>
                    </Col>
                </Row>
                <Row className={styles.introButtonWrapper} gutter={20} type="flex">
                    <Col className={styles.columnCenter} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }} lg={{ span: 5 }}> 
                        <div className={styles.buttonWrapper}>
                            <Button className={styles.button} type="primary" size="large" icon="book">Download White Paper</Button>
                        </div>
                    </Col>
                </Row>

            </div>
            
        );
    }
}

export default HeaderContent