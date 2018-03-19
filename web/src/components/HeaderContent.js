import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Button } from 'antd'
import { Divider } from 'antd'

import CountdownTimer from './CountdownTimer'

import styles from './headerContent.module.css'


class HeaderContent extends Component {
    render() {
        return(
            <div>
                <h1 className={styles.heading}>Jaro Coin</h1>
                <h3 className={styles.headline}>Say Hello to Crypto Consulting</h3>
                <Row id="home" className={styles.row} gutter={20} type="flex">
                    <Col className={styles.columnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                        <h3 className={styles.title}>Crypto currency fully baked by Providers Time</h3>
                        <p className={styles.description}>JaroCoin is the future of global blockchainification of personal time of smart specialists.</p>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                        <div className={styles.button}>
                            <Button type="primary" size="large" icon="book">Download White Paper</Button>
                        </div>
                    </Col>
                    <Col className={styles.columnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}> 
                        <div className="video-container">
                            <iframe src="https://player.vimeo.com/video/201178499" width="640" height="360" frameBorder="0"></iframe>
                        </div>
                    </Col>
                </Row>

                <Divider className={styles.divider} />

                <CountdownTimer />
            </div>
            
        );
    }
}

export default HeaderContent