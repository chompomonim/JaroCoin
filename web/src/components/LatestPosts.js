import React, { Component } from 'react'

import { Col, Row, Button } from 'antd'

import styles from './latestPosts.module.css'

import youtubeThumbnailDemoImage from '../images/youtubethumbnail-demo.jpg'


class LatestPosts extends Component {
    render() {
        return (
            <div id="latest_posts">
                <h2 className={styles.h2}>Latest Posts</h2>
                <Row className={styles.row} gutter={48} type="flex">
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3 className={styles.title}>Crypto Wallet Platform</h3>
                        <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3 className={styles.title}>Getting Things Done</h3>
                        <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3 className={styles.title}>Blockchain Coding Tools</h3>
                        <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3 className={styles.title}>React.js Workflow</h3>
                        <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <h3 className={styles.title}>Webinar: Crypto Currency Trading Platform</h3>
                        <img className={styles.image} alt="title" src={youtubeThumbnailDemoImage} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.column} xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <div className={styles.buttonSkills}>
                            <Button type="primary" size="large" icon="form">More Posts</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LatestPosts