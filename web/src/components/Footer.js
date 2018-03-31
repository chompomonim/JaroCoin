import React, { Component } from 'react'

import { Col, Row, Button, Icon, Modal } from 'antd'
// 
import MediaQuery from 'react-responsive'

import styles from './footer.module.css'

function disclaimerModal() {
    Modal.info({
        title: 'DISCLAIMER',
        maskClosable: true,
        content: (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem....</p>
            </div>
        ),
        onOk() { },
    });
}

function termsOfUseModal() {
    Modal.info({
        title: 'TERMS OF USE',
        content: (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem....</p>
            </div>
        ),
        onOk() { },
    });
}


class Footer extends Component {

    state = {
        modal1Visible: false,
        modal2Visible: false,
    }

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    render() {
        return (
            <div id="contact" className={styles.footerWrapper}>
                <MediaQuery query="(min-width: 992px)">
                    <Row className={styles.footerItemListWrapper} gutter={48} type="flex">
                        <Col className={styles.footerFirstColumn} md={{ span: 8 }} lg={{ span: 8 }}>
                            <a className={styles.footerItemLink} href="#about" rel="noopener noreferrer">Who Is Jaro?</a><br />
                            <a className={styles.footerItemLink} href="#what-is-jarocoin" rel="noopener noreferrer">What Is JaroCoin?</a><br />
                            <a className={styles.footerItemLink} href="#" rel="noopener noreferrer">How to use JARO?</a><br />
                            <a className={styles.footerItemLink} href="#token-distribution-model" rel="noopener noreferrer">Token distribution model</a><br />
                        </Col>
                        <Col className={styles.footerCenterColumn} md={{ span: 8 }} lg={{ span: 8 }}>
                            <a className={styles.footerItemLink} href="#about" rel="noopener noreferrer">Jaro Skills</a><br />
                            <a className={styles.footerItemLink} href="#services" rel="noopener noreferrer">Services</a><br />
                            <a className={styles.footerItemLink} href="#" target="_blank" rel="noopener noreferrer">Calendar</a><br />
                            <a className={styles.footerItemLink} href="#" target="_blank" rel="noopener noreferrer">WhitePaper</a><br />
                        </Col>
                        <Col className={styles.footerLastColumn} md={{ span: 8 }} lg={{ span: 8 }}>
                            <a className={styles.footerItemLink} href="https://medium.com/@chompomonim/" target="_blank" rel="noopener noreferrer">Blog</a><br />
                            <a className={styles.footerItemLink} href="#faq" target="_blank" rel="noopener noreferrer">FAQ</a><br />
                            <a className={styles.footerItemLink} href="#" target="_blank" rel="noopener noreferrer">Telegram group</a><br />
                            <a className={styles.footerItemLink} href="https://youtube.com/" target="_blank" rel="noopener noreferrer">Youtube Channel</a><br />
                        </Col>
                    </Row>
                </MediaQuery>
                <MediaQuery query="(max-width: 991px)">
                    <Row className={styles.footerItemListMobileWrapper} gutter={48} type="flex">
                        <Col className={styles.footerMobileColumn} xs={{ span: 24 }} sm={{ span: 16 }}>                            
                            <a className={styles.footerItemLink} href="#about" rel="noopener noreferrer">Who Is Jaro?</a><br />
                            <a className={styles.footerItemLink} href="#what-is-jarocoin" rel="noopener noreferrer">What Is JaroCoin?</a><br />
                            <a className={styles.footerItemLink} href="#" rel="noopener noreferrer">How to use JARO?</a><br />
                            <a className={styles.footerItemLink} href="#token-distribution-model" rel="noopener noreferrer">Token distribution model</a><br />
                        </Col>
                        <Col className={styles.footerMobileColumn} xs={{ span: 24 }} sm={{ span: 8 }}>
                            <a className={styles.footerItemLink} href="#about" rel="noopener noreferrer">Jaro Skills</a><br />
                            <a className={styles.footerItemLink} href="#services" rel="noopener noreferrer">Services</a><br />
                            <a className={styles.footerItemLink} href="#" target="_blank" rel="noopener noreferrer">Calendar</a><br />
                            <a className={styles.footerItemLink} href="#" target="_blank" rel="noopener noreferrer">WhitePaper</a><br />
                        </Col>
                        <Col className={styles.footerMobileColumn} xs={{ span: 24 }} sm={{ span: 12 }}>
                            <a className={styles.footerItemLink} href="https://medium.com/@chompomonim/" target="_blank" rel="noopener noreferrer">Blog</a><br />
                            <a className={styles.footerItemLink} href="#faq" target="_blank" rel="noopener noreferrer">FAQ</a><br />
                            <a className={styles.footerItemLink} href="#" target="_blank" rel="noopener noreferrer">Telegram group</a><br />
                            <a className={styles.footerItemLink} href="https://youtube.com/" target="_blank" rel="noopener noreferrer">Youtube Channel</a><br />
                        </Col>
                    </Row>
                </MediaQuery>
                <Row className={styles.footerToolbarWrapper} type="flex" justify="space-between">
                    <Col className={styles.footerTermsWrapper} xs={{ span: 24 }} sm={{ span: 11 }} md={{ span: 8, push: 1 }} lg={{ span: 8 }}>
                        <a className={styles.footerTermsItem} onClick={termsOfUseModal}>Terms of Use</a> 
                        <span className={styles.footerTermsItemSeparator}> | </span>
                        <a className={styles.footerTermsItem} onClick={disclaimerModal}>Disclaimer</a> 
                    </Col>
                    <Col className={styles.footerSocialWrapper} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 10, pull: 1 }} lg={{ span: 8}}>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="mailto:jaro@jarocoin.com?Subject=JaroCoin%20Web%20Contact" target="_top" rel="noopener noreferrer">
                            <Icon type="mail" />
                        </a>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="https://twitter.com/chompomonim" target="_blank" rel="noopener noreferrer">
                            <Icon type="twitter" /> {/*color: '#37c6f5'*/}
                        </a>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="https://plus.google.com/+JaroSatkevic" target="_blank" rel="noopener noreferrer">
                            <Icon type="google-plus" /> {/* color: '#dd4d42' */}
                        </a>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="https://medium.com/@chompomonim/" target="_blank" rel="noopener noreferrer">
                            <Icon type="medium" /> {/* color: '#000000' */}
                        </a>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Icon type="facebook" /> {/* color: '#4767aa' */}
                        </a>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="https://www.linkedin.com/in/jarolt" target="_blank" rel="noopener noreferrer">
                            <Icon type="linkedin" /> {/* color: '#0077b5 */}
                        </a>
                        <a className={styles.footerSocialItem} style={{ color: '#1d1d1d' }} href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <Icon type="youtube" /> {/* color: '#ff0000' */}
                        </a>
                    </Col>
                    <Col className={styles.footerCopyrightWrapper} span={24}>
                        <div>All Right Reserved - ©JaroCoin</div>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default Footer