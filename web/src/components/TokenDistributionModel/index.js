import React from 'react'

import { Col, Row, Divider, Button, Tooltip } from 'antd'

import Timeline from './Timeline'
import MediaQuery from 'react-responsive'

import tokenDistributionInfographic from '../../images/TokenDistributionInfographics.jpg'
import tokenDistributionInfographicMobile from '../../images/TokenDistributionInfographicsMobile.jpg'
import styles from './distributionModel.css'

function TokenDistributionModel() {

    return (
        <div className="tokenDistributionWrapper">
            <Row justify="center" align="center" type="flex">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <h2 className="tokenDistributionTitle">Token distribution model</h2>
                </Col>
            </Row>
            <Row justify="center" align="center" gutter={20} type="flex" justify="center" className="tokenDistributionInfographicWrapper">

                <Col xs={{ span: 20 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 18 }} className="tokenDistributionText1stItem">
                    <div className="tokenDistributionTextItemTitle">20% Initial Time Offering</div>
                    <div className="tokenDistributionTextItemDescription">
                        it's part of Jaro time<br />
                        which you can get!
                    </div>
                </Col>
                <Col xs={{ span: 20 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 18 }} className="tokenDistributionText2ndItem">
                    <div className="tokenDistributionTextItemTitle">11% personal time</div>
                    <div className="tokenDistributionTextItemDescription">
                        each person needs time for<br />
                        self education, hobby and<br />
                        meeting friends
                    </div>
                </Col>

                <MediaQuery query="(max-width: 991px)">
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
                        <img className="tokenDistributionImage" src={tokenDistributionInfographicMobile} alt="" />
                    </Col>
                </MediaQuery>

                <MediaQuery query="(min-width: 992px)">
                    <Col xs={{ span: 20 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
                            <img className="tokenDistributionImage" src={tokenDistributionInfographic} alt="" />
                    </Col>
                </MediaQuery>

                <Col xs={{ span: 20 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 18 }} className="tokenDistributionText3rdItem">
                    <div className="tokenDistributionTextItemTitle">4% pre-ito</div>
                    <div className="tokenDistributionTextItemDescription">
                        tokens reserved for my pre ito<br />
                        liabilities and for early supporters<br />
                        of this project
                    </div>
                </Col>
                <Col xs={{ span: 20 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 18 }} className="tokenDistributionText4thItem">
                    <div className="tokenDistributionTextItemTitle">25% family time</div>
                    <div className="tokenDistributionTextItemDescription">
                        family is important part of my<br />
                        live, I'd like give my family at<br />
                        least 1/4 of all my time
                    </div>
                </Col>
                <Col xs={{ span: 20 }} sm={{ span: 22 }} md={{ span: 14 }} lg={{ span: 14 }} className="tokenDistributionDescription">
                        1 JARO = 1 second of Jaro time = 0.00001 Bitcoin<br />
                        There are only 21 000 000<Tooltip placement="topLeft" title="In any given time there will be never more that 21 million tokens in circulation.">*</Tooltip> JARO
                    <div className="buttonLearnMoreWhitepaper" style={{display: 'none'}}>
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
