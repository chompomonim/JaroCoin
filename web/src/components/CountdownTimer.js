import React, { Component } from 'react'

import Countdown from 'react-countdown-now';

import { Button } from 'antd'

import MediaQuery from 'react-responsive'

import styles from './countdownTimer.module.css'


const CompletionMessage = () => (
                            <div className={styles.completionMessage}>
                                The ICO has started <br /> 
                                You are ready to go! <br />
                                <br />
                                <Button className={styles.buyJaroButton} href="#get-jaro" target="_blank" size="large">
                                    GET JARO
                                </Button>
                            </div>
)

// Renderer callback with condition
const desktopSizeCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <CompletionMessage />
    } else {
        // Render a countdown
        return (
            <div>
                <div className={styles.timeElement}>
                    <span className={styles.desktopSizeTimeNumber}>{days}</span><br />
                    <span className={styles.timeSizeTitle}>Days</span><br />
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.desktopSizeTimeNumber}>{hours}</span><br />
                    <span className={styles.desktopSizeTimeTitle}>Hours</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.desktopSizeTimeNumber}>{minutes}</span><br />
                    <span className={styles.desktopSizeTimeTitle}>Minutes</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.desktopSizeTimeNumber}>{seconds}</span><br />
                    <span className={styles.desktopSizeTimeTitle}>Seconds</span>
                </div>
            </div>
        );
    }
};

const mobileSizeCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <CompletionMessage />;
    } else {
        // Render a countdown
        return (
            <div>
                <div className={styles.timeElement}>
                    <span className={styles.mobileSizeTimeNumber}>{days}</span><br />
                    <span className={styles.mobileSizeTimeTitle}>Days</span><br />
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.mobileSizeTimeNumber}>{hours}</span><br />
                    <span className={styles.mobileSizeTimeTitle}>Hours</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.mobileSizeTimeNumber}>{minutes}</span><br />
                    <span className={styles.mobileSizeTimeTitle}>Minutes</span>
                </div>
                <div className={styles.timeElement}>
                    <span className={styles.mobileSizeTimeNumber}>{seconds}</span><br />
                    <span className={styles.mobileSizeTimeTitle}>Seconds</span>
                </div>
            </div>
        );
    }
};

class CountdownTimer extends Component {
    render() {
        return (
            <div className={styles.timer}>

                <MediaQuery query="(min-width: 577px)">
                    <h3 className={styles.desktopSizeTitle}>JaroCoin Release
                        <span className={styles.desktopSizeTitleFeatured}> Countdown</span>
                    </h3>
                        <Countdown
                            date={Date.now() + 5000} // Quick test
                            // date={'Sat, 04 Apr 2018 12:00:00'}
                            renderer={desktopSizeCountdown}
                        />
                </MediaQuery>

                <MediaQuery query="(max-width: 576px)">
                    <h3 className={styles.mobileSizeTitle}>JaroCoin Release
                        <span className={styles.mobileSizeTitleFeatured}> Countdown</span>
                    </h3>
                        <Countdown
                            date={Date.now() + 5000} // Quick test
                            // date={'Sat, 04 Apr 2018 12:00:00'}
                            renderer={mobileSizeCountdown}
                        />
                </MediaQuery>



            </div>
        );
    }
}

export default CountdownTimer