import React from 'react'

import { Col, Row, Icon, Tooltip } from 'antd'

// import jaroCoinLogo from '../../images/JaroCoinLogoGold.png'
// import jaroCoinLogo from '../../images/JaroCoinBg.png'
// import jaroCoinLogo from '../../images/JaroCoinCoin.jpg'
import jaroCoinLogo from '../../images/JCoin.png'

import styles from './about.module.css'

function WhatIsJaroCoin() {
    const TooltipText = 'New advanced token standart. ERC20 compatible but much better.'
    return (
        <div className={styles.whatIsJaroCoinWrapper} id="what-is-jaro">
            <Row type="flex" justify="space-around" align="top">
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <h2 className={styles.whatIsJaroCoinTitle}>What is JaroCoin?</h2>
                </Col>
            </Row>
            <Row className={styles.whatIsJaroCoin1stRow} gutter={50} type="flex" justify="center" align="middle">
                <Col className={styles.whatIsJaroCoin1stRowColumnLeft} xs={{ span: 20 }} sm={{ span: 22 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <p className={styles.whatIsJaroCoinIntro}>JaroCoin (JARO) is
                    <Tooltip placement="topLeft" title={TooltipText}> <span className={styles.underline}>ERC777</span> </Tooltip>
                    token on Rootstock (bitcoin sidechain) and is 100% backed by Jaro Time! </p>
                    <p className={styles.whatIsJaroCoinQuote}>“I am selling my time for the better, more technologically advanced
                    and more educated world. This coin is the only way to get my attention, advice and services.” </p>
                    <p className={styles.whatIsJaroCoinQuote}>Jaro Šatkevič, founder of JaroCoin</p>
                </Col>
                <Col className={styles.whatIsJaroCoin1stRowColumnRight} xs={{ span: 18 }} sm={{ span: 10 }} md={{ span: 6 }} lg={{ span: 5 }}>
                    <img className={styles.whatIsJaroCoinImage} src={jaroCoinLogo} alt="" />
                </Col>
            </Row>
            <Row className={styles.whatIsJaroCoin2ndRow} type="flex" justify="space-between" align="middle" >
                <Col className={styles.whatIsJaroCoin2ndRowColumnLeft} xs={{ span: 23, offset: 2 }} sm={{ span: 12 }} md={{ span: 10 }} lg={{ span: 8, offset: 4}}>
                    <div className={styles.whatIsJaroCoinItem}><Icon type="plus-circle-o" />&nbsp;
                        Higly valuble investment <Tooltip placement="topLeft" title="You can Hodl them because my time is running and becomming more and more expensive."> <span className={styles.underline}>(?)</span></Tooltip></div>
                    <div className={styles.whatIsJaroCoinItem}><Icon type="plus-circle-o" />&nbsp;
                        True utility coin <Tooltip placement="topLeft" title="after using your JAROs they will be destroyed and not available to anyone anymore, as my time was."> <span className={styles.underline}>(?)</span></Tooltip></div>
                </Col>
                <Col className={styles.whatIsJaroCoin2ndRowColumnRight} xs={{ span: 23, offset: 2 }} sm={{ span: 12 }} md={{ span: 10 }} lg={{ span: 12, offset: 0 }}>
                    <div className={styles.whatIsJaroCoinItem}><Icon type="plus-circle-o" />&nbsp;
                        Real limited supply <Tooltip placement="topLeft" title="JARO supply is limited as time is."> <span className={styles.underline}>(?)</span></Tooltip></div>
                    <div className={styles.whatIsJaroCoinItem}><Icon type="plus-circle-o" />&nbsp;
                        Coin value is 100% baked <Tooltip placement="topLeft" title="... by Jaro's time. So you always can exchange your coins into Jaro's time"> <span className={styles.underline}>(?)</span></Tooltip></div>
                </Col>
            </Row>
        </div>
    )
}

export default WhatIsJaroCoin
