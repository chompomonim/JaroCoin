import React, { Component } from 'react'

import { Button } from 'antd'

import styles from './getJaroButton.module.css'


class GetJaroButton extends Component {

    render() {
        return (
            <div className={styles.getJaroButtonWrapper}>
                <Button className={styles.getJaroButton} type="primary" size="large">GET JARO</Button>
            </div>
        );
    }
}

export default GetJaroButton