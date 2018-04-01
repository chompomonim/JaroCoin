import React from 'react'

import { Col, Row, Divider, Button, Tooltip } from 'antd'

import Timeline from './Timeline'

import tokenDistributionInfographic from '../../images/TokenDistributionInfographics.jpg'
import styles from './distributionModel.module.css'

function TokenDistributionModel() {

    return (
        <div className={styles.tokenDistributionWrapper}>
            <Row justify="center" align="center" type="flex">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <h2 className={styles.tokenDistributionTitle}>Token distribution model</h2>
                </Col>
            </Row>
            <Row justify="center" align="center" gutter={20} type="flex">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }} className={styles.tokenDistributionInfographic}>
                    <div className={styles.tokenDistributionInfographicWrapper}>
                        <div className={styles.tokenDistributionText1stItem}>
                            <div className={styles.tokenDistributionTextItemTitle}>20% Initial Time Offering</div>
                            <div className={styles.tokenDistributionTextItemDescription}>
                                it's part of Jaro time<br />
                                which you can get!
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
                            <div className={styles.tokenDistributionTextItemTitle}>4% pre-ito</div>
                            <div className={styles.tokenDistributionTextItemDescription}>
                                tokens reserved for my pre ito<br />
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
                        There are only 21 000 000<Tooltip placement="topLeft" title="In any given time there will be never more that 21 million tokens in circulation.">*</Tooltip> JARO
                    <div className={styles.buttonLearnMoreWhitepaper} style={{display: 'none'}}>
                        <Button type="primary" size="large" icon="book" href="#" target="_blank">Learn more in Whitepaper</Button>
                    </div>
                </Col>
            </Row>

            <Divider id="timeline" style={{ width: '40%', margin: '80px auto' }} />

            <Timeline />

        </div>
    )
}

export default TokenDistributionModel
