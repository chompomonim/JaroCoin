import React, { Component } from 'react'

import { Carousel } from 'antd'
import { Icon } from 'antd'

import styles from './quotes.module.css'


class Quotes extends Component {
    render() {
        return (
            <div id="quotes" style={{ maxWidth: '1260px' }}>
                <h2 className={styles.h2}>Quotes</h2>

                <Carousel
                    // Props: https://github.com/akiran/react-slick
                    autoplay
                    className={styles.carousel}
                    // adaptiveHeight={true}
                    arrows={true}
                    autoplaySpeed={'3000'}
                    draggable={true}
                    pauseOnHover={true}
                // centerMode={true}
                >
                    <div className={styles.carouselCard}>
                        <div className={styles.text}>"One of the smartest men I've ever met"</div>
                        <div className={styles.author}>Elon Musk, founder fo Tesla</div>
                    </div>
                    <div className={styles.carouselCard}>
                        <div className={styles.text}>"This person, helped me to change my thinking"</div>
                        <div className={styles.author}>Mark Zuckerberg, founder fo Facebook</div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Quotes