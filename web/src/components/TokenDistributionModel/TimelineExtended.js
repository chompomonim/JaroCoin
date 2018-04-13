import React, { Component } from 'react'

import { Steps } from 'antd'
import { message } from 'antd'
import { Button } from 'antd'

import styles from './timelineExtended.module.css'

const steps = [{
    title: '16st of April',
    description: 'Start token sale',
    content: 'Initial coin release',
}, {
    title: '1st of May',
    description: 'Activate Smart Contracts to accept JARO',
    content: 'Second-content',
}, {
    title: '1st of August',
    description: 'First token rebalance',
    content: 'Last-content',
}, {
    title: '2028.04.01',
    description: 'Final Burn of JaroCoins',
    content: 'Final Burn of JaroCoins',
}];


class TimelineExtended extends Component {

    constructor(props) {
        super(props);
        this.state = {
                current: 0, //set current timeline step
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
    goToStart() {
        const current = 0;
        this.setState({ current });
    }

    render() {

        const { current } = this.state;

        return (
            <div className={styles.timelineExtendedWrapper}>
                <h3 className={styles.h3} >Timeline</h3>
                <Steps current={current}>
                    {steps.map(item => <Steps.Step key={item.title} title={item.title} description={item.description} />)}
                </Steps>
                <div className={styles.stepsContent}>{steps[this.state.current].content}</div>
                <div className={styles.stepsAction}>
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('JaroCoin Project Ends in 2028.04.01') && this.goToStart()}>Start again</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
            </Button>
                    }
                </div>
            </div>
        );
    }
}

export default TimelineExtended