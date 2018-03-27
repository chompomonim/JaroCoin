import React, { Component } from 'react'

import { Steps } from 'antd'
import { message } from 'antd'
import { Button } from 'antd'

import styles from './timeline.module.css'

const steps = [{
    title: '1st of April',
    description: 'Start token sale',
    content: 'Initial coin release',
}, {
    title: '10th of April',
    description: 'Activate Smart Contracts to accept JARO',
    content: 'Second Content',
}, {
    title: '1st of July',
    description: 'First token rebalance',
    content: 'Third Content',
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
            <div className={styles.timelineWrapper}>
                <h3 className={styles.h3} >Timeline</h3>
                <Steps current={current}>
                    {steps.map(item => <Steps.Step key={item.title} title={item.title} description={item.description} />)}
                </Steps>
                {/* <div className={styles.stepsContent}>{steps[this.state.current].content}</div> */}
            </div>
        );
    }
}

export default Timeline