import React, { Component } from 'react'

import Countdown from 'react-countdown-now';

import styles from './countdownTimer.module.css'


const Completionist = () => <span>You are good to go!</span>
const Separator = ':'

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <div>
                <div className={styles.timeElement}>
                    <span className={styles.timeNumber}>{days}</span><br />
                    <span className={styles.timeTitle}>Days</span><br />
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.timeNumber}>{hours}</span><br />
                    <span className={styles.timeTitle}>Hours</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.timeNumber}>{minutes}</span><br />
                    <span className={styles.timeTitle}>Minutes</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.timeNumber}>{seconds}</span><br />
                    <span className={styles.timeTitle}>Seconds</span>
                </div>
            </div>
        );
    }
};

class CountdownTimer extends Component {
    render() {
        return (
            <div className={styles.timer}>
                <h3 className={styles.title}>JaroCoin Release
                    <span className={styles.titleFeatured}> Countdown</span>
                </h3>
                <Countdown
                    // 
                    // date={Date.now() + 5000} // Quick test
                    date={'Sat, 01 Apr 2018 12:00:00'}
                    renderer={renderer}
                />
            </div>
        );
    }
}

export default CountdownTimer