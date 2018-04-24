import React, { Component } from 'react'

import { Steps } from 'antd'
import { Row, Col } from 'antd'

import MediaQuery from 'react-responsive'

import styles from './timeline.module.css'

const steps = [{
    title: '16th of April',
    description: 'Start token sale',
    content: 'Initial coin release',
}, {
    title: '1st of May',
    description: 'Activate Smart Contracts to accept JARO',
    content: 'Second Content',
}, {
    title: '1st of August',
    description: 'First token rebalance',
    content: 'Once in a while I will put more tokens into circulation, but never more that 21 million',
}, {
    title: '2028.04.01',
    description: 'Final Burn of JaroCoins',
    content: 'Last Content',
}];


class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0, //set current Timeline step
        };
    }

    render() {
        const { current } = this.state;
        return (
            <Row justify="space-around" align="center" gutter={20} type="flex" className={styles.timelineWrapper}>
                <Col span={24} className={styles.timelineTitle}>
                    <h3 className={styles.h3} >Timeline</h3>
                </Col>
                <MediaQuery query="(min-width: 576px)">
                    <Col sm={{ span: 22 }} md={{ span: 22 }} lg={{ span: 18 }}>
                        <Steps current={current}>
                            {steps.map(item => <Steps.Step key={item.title} title={item.title} description={item.description} />)}
                        </Steps>
                        {/* <div className={styles.stepsContent}>{steps[this.state.current].content}</div> */}
                    </Col>
                </MediaQuery>
                <MediaQuery query="(max-width: 575px)">
                    <Col xs={{ span: 18, offset: 2 }}>
                        <Steps direction="vertical" current={current} >
                            {steps.map(item => <Steps.Step key={item.title} title={item.title} description={item.description} />)}
                        </Steps>
                        {/* <div className={styles.stepsContent}>{steps[this.state.current].content}</div> */}
                    </Col>
                </MediaQuery>
            </Row>
        );
    }
}

export default Timeline