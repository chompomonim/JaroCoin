import React, { Component } from 'react'

import { Progress } from 'antd'
import { Row, Col } from 'antd'
import { Button } from 'antd'
import { Modal } from 'antd'
import { Icon } from 'antd'

import Countdown from 'react-countdown-now';

import GetJaroButton from '../GetJaroButton'
import CountdownCompletionMessage from './CountdownCompletionMessage'


import styles from './timeBar.module.css'




// Renderer callback with condition
const renderer = ({ total, completed }) => {

    if (completed) {
        return <CountdownCompletionMessage />
    } else {
        // Render a countdown
        // 10 Years = 315619200000 Miliseconds
        return (
            <div className={styles.timeBarWrapper}>
                <Row gutter={20} type="flex" justify="start" align="middle">
                <Col className={styles.timeHeadingWrapper} xs={{ span: 22 }} sm={{ span: 22, offset: 1 }} md={{ span: 16, pull: 1 }} lg={{ span: 23 }}>
                    <div className={styles.timeBarHeading}>
                        <div className={styles.timeBarNumber}>{Math.floor(total / 1000)}</div>
                        <div className={styles.timeBarTitle}> seconds left</div><br />
                    </div>
                 </Col>
                </Row>
                <Row gutter={20} type="flex" justify="center" align="middle">
                    <Col className={styles.timeBar} xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 16 }} lg={{ span: 16 }}>
                        <Progress className={styles.progressBar} percent={Math.floor((total / 325619200000) * 100)} showInfo={true} strokeWidth={68} />
                    </Col>
                    <Col className={styles.timeBarButton} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 7 }} lg={{ span: 4 }}>
                        <div className={styles.getJaroButtonContainer}>
                            <GetJaroButton />
                        </div>
                    </Col>
                </Row>
            </div>

        );
    }
};

class TimeBar extends Component {
    render() {
        return (
            <div>
                <Countdown
                    intervalDelay={50}
                    precision={3}
                    date={Date.now() + 8000} // Quick test
                    // date={'Sat, 04 Apr 2028 12:00:00'}
                    renderer={renderer}
                />
            </div>
        );
    }
}

export default TimeBar