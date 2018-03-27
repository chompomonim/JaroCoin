import React, { Component } from 'react'

import { Col, Row, Button, Icon, Modal } from 'antd'

import styles from './latestPosts.module.css'

import youtubeThumbnailDemolatestPostsItemImage from '../images/youtubethumbnail-demo.jpg'


class LatestPosts extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        return (
            <div id="latest_posts" className={styles.latestPostsWrapper}>
                <h2 className={styles.latestPostsHeading}>Latest Posts</h2>
                <Row className={styles.latestPostsItemListWrapper} gutter={48} type="flex">
                    <Col className={styles.latestPostsItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <img className={styles.latestPostsItemImage} alt="latestPostsItemTitle" src={youtubeThumbnailDemolatestPostsItemImage} />
                        <h3 className={styles.latestPostsItemTitle}>Crypto Wallet Platform</h3>
                        <p className={styles.latestPostsItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.latestPostsItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <img className={styles.latestPostsItemImage} alt="latestPostsItemTitle" src={youtubeThumbnailDemolatestPostsItemImage} />
                        <h3 className={styles.latestPostsItemTitle}>Getting Things Done</h3>
                        <p className={styles.latestPostsItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.latestPostsItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <img className={styles.latestPostsItemImage} alt="latestPostsItemTitle" src={youtubeThumbnailDemolatestPostsItemImage} />
                        <h3 className={styles.latestPostsItemTitle}>Blockchain Coding Tools</h3>
                        <p className={styles.latestPostsItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.latestPostsItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <h3 className={styles.latestPostsItemTitle}>React.js Workflow</h3>
                        <img className={styles.latestPostsItemImage} alt="latestPostsItemTitle" src={youtubeThumbnailDemolatestPostsItemImage} />
                        <p className={styles.latestPostsItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.latestPostsItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <h3 className={styles.latestPostsItemTitle}>Webinar: Crypto Currency Trading Platform</h3>
                        <img className={styles.latestPostsItemImage} alt="latestPostsItemTitle" src={youtubeThumbnailDemolatestPostsItemImage} />
                        <p className={styles.latestPostsItemDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. </p>
                    </Col>
                    <Col className={styles.latestPostsLastItemWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <Button className={styles.latestPostsMorePostsButton} type="dashed" size="large" onClick={() => this.setModalVisible(true)}>
                            More Posts
                        </Button>
                    </Col>
                </Row>

                <Modal
                    title="THE FRESH NEWS:"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <h3 className={styles.latestPostsModalHeading}>Social Media's:</h3>
                    <div className={styles.latestPostsModalItem}>
                        <a style={{ color: '#37c6f5' }} href="https://twitter.com/chompomonim" target="_blank" rel="noopener noreferrer"><Icon type="twitter" />Twitter</a>
                    </div>
                    <div className={styles.latestPostsModalItem}>
                        <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/jarolt" target="_blank" rel="noopener noreferrer"><Icon type="linkedin" /> LinkedIn</a>
                    </div>
                    <div className={styles.latestPostsModalItem}>
                        <a style={{ color: '#000000' }} href="https://medium.com/@chompomonim/" target="_blank" rel="noopener noreferrer"><Icon type="medium" /> Medium</a>
                    </div>
                    <div className={styles.latestPostsModalItem}>
                        <a style={{ color: '#767676' }} href="https://plus.google.com/+JaroSatkevic" target="_blank" rel="noopener noreferrer"><Icon type="google-plus" /> Google+</a>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default LatestPosts