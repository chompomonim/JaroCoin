import React, { Component } from 'react'

import { Col, Row } from 'antd'
import { Steps, message } from 'antd';

import { Divider } from 'antd'
import { Button, Icon } from 'antd'

import styles from './about.module.css'

import jaroCoinDemoImage from '../images/jarocoin-demo.jpg'
import tokenDistributionDemoImage from '../images/tokendistribution-demo.jpg'

const steps = [{
    title: '1st of April',
    description: 'Start token sale',
    content: 'Initial coin release',
}, {
    title: '10th of April',
    description: 'Smart contracts to accept JARO',
    content: 'Second-content',
}, {
    title: '1st of July',
    description: 'First token rebalance',
    content: 'Last-content',
}, {
    title: '2028.04.01',
    description: 'Final Burn of JaroCoins',
    content: 'Final Burn of JaroCoins',
}];


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }


    render() {

        const { current } = this.state;

        return (
            <div id="about">
                <h2 className={styles.h2}>About</h2>
                <h3 className={styles.h3}>Who is Jaro?</h3>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div className={styles.number}>340+</div>
                        <p className={styles.description}>Projects Completed</p>
                    </div>
                    <div className={styles.separator}>/</div>
                    <div className={styles.item}>
                        <div className={styles.number}>7</div>
                        <p className={styles.description}>Feautred in Wired Magazine</p>
                    </div>
                    <div className={styles.separator}>/</div>
                    <div className={styles.item}>
                        <div className={styles.number}>11</div>
                        <p className={styles.description}>Years in Business</p>
                    </div>
                </div>
                <div className={styles.buttonSkills}>
                    <Button type="primary" size="large" icon="pie-chart">Skills</Button>
                </div>

                <Divider className={styles.divider} />

                <h3 className = { styles.h3 }>What is JaroCoin?</h3>
                <Row className={styles.row} gutter={20} type="flex">
                    <Col className={styles.columnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 14 }}>
                        <div className={styles.description}>
                            <p>JaroCoin is crypto asset 100% backed by Jaro time.</p>
                            <p>Time is most preciouse asset we have. JaroCoin can't go to zero, you can not just trade it, hodl it or use as medium of exchange. You can withdrawal it for Jaro time and services.</p>
                            <ul>
                                <li>It's higly valuble investment.</li>
                                <li>True utility coin.</li>
                                <li>Truely limited suply > JARO suply is limited as time is.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className={styles.columnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={jaroCoinDemoImage} alt="" />
                        </div>
                    </Col>
                </Row>

                <Divider className={styles.divider} />

                <Row className={styles.row} gutter={20} type="flex">
                    <Col className={styles.columnLeft} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 10 }}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={tokenDistributionDemoImage} alt="" />
                        </div>
                    </Col>
                    <Col className={styles.columnRight} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 14}}>
                        <h2 className={styles.h2 }>Token distribution</h2>
                        <div className={styles.description}>
                            <p>1 JARO = 1 Jaro second = 0.0001 bitcoin</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.</p>
                            <p>There are only 21 000 000* JARO</p>
                        </div>
                        <div className={styles.buttonLearnMore}>
                            <Button type="primary" size="large" icon="book">Learn more in whitepaper</Button>
                        </div>
                    </Col>

                </Row>

                <Divider className={styles.divider} />

                <div className={styles.timeline}>
                    <h3 className={styles.h3} >Timeline</h3>
                    <Steps current={current}>
                        {steps.map(item => <Steps.Step key={item.title} title={item.title} description={item.description} />)}
                    </Steps>
                    <div className={styles.stepsContent}>{steps[this.state.current].content}</div>
                    <div className={styles.stepsAction}>
                        {
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        }
                        {
                            this.state.current < steps.length - 1
                            &&
                            <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                            this.state.current === steps.length - 1
                            &&
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default About