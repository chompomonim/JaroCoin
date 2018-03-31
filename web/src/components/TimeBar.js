import React, { Component } from 'react'

import { Progress } from 'antd'

import Countdown from 'react-countdown-now';

import styles from './timeBar.module.css'


const Completionist = () => <span>You are good to go!</span>

// Renderer callback with condition
const renderer = ({ total, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        // Render a countdown
        // 10 Years = 315619200000 Miliseconds
        return (
            <div className={styles.timeBarWrapper}>
                <div className={styles.timeBarNumber}>{ Math.floor(total / 1000) }</div>
                <div className={styles.timeBarTitle}> seconds left</div><br />
                <Progress className={styles.progressBar} percent={Math.floor((total / 325619200000) * 100)} showInfo={true} strokeWidth={68} />
            </div>
            
        );
    }
};


class TimeBar extends Component {
    render() {
        return (
            <Countdown
                intervalDelay={50}
                precision={3}
                // date={Date.now() + 5000} // Quick test
                date={'Sat, 01 Apr 2028 12:00:00'}
                renderer={renderer}
            />
        );
    }
}

export default TimeBar