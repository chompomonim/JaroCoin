import React from 'react'
import Countdown from 'react-countdown-now'
import MediaQuery from 'react-responsive'

import TimeBar from './TimeBar'

import styles from './countdownTimer.module.css'

const CompletionMessage = () => (
    <div className={styles.completionMessage}>
        <h3 className={styles.desktopSizeTitle}>Initial Time Offering
             <span className={styles.desktopSizeTitleFeatured}> Started</span>
        </h3>
        <TimeBar />
    </div>
)

const CountdownMessage = () => (
    <h3 className={styles.desktopSizeTitle}>JaroCoin Release
        <span className={styles.desktopSizeTitleFeatured}> Countdown</span>
    </h3>
)

// Renderer callback with condition
const desktopSizeCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <CompletionMessage />
    } else {
        // Render a countdown
        return (
            <div>
                <CountdownMessage />
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
        )
    }
}

const mobileSizeCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <CompletionMessage />
    } else {
        // Render a countdown
        return (
            <div>
                <CountdownMessage />
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
        )
    }
}

function CountdownTimer() {
    const startDate = 'Sat, 11 Apr 2018 12:00:00'
    return (
        <div className={styles.timer}>
            <MediaQuery query="(min-width: 577px)">
                <Countdown
                    date={startDate}
                    renderer={desktopSizeCountdown}
                />
            </MediaQuery>

            <MediaQuery query="(max-width: 576px)">
                <Countdown
                    date={startDate}
                    renderer={mobileSizeCountdown}
                />
            </MediaQuery>
        </div>
    )
}

export default CountdownTimer
