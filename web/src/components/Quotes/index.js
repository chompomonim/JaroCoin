import React from 'react'

import { Carousel } from 'antd'
import MediaQuery from 'react-responsive'

import styles from './quotes.module.css'

function Quotes() {
    const quotes = [
        <div className={styles.carouselCard}>
            <div className={styles.carouselCardText}>"One of the smartest men I've ever met"</div>
            <div className={styles.carouselCardAuthor}>Elon Musk, founder fo Tesla</div>
        </div>,
        <div className={styles.carouselCard}>
            <div className={styles.carouselCardText}>"This person, helped me to change my thinking"</div>
            <div className={styles.carouselCardAuthor}>Mark Zuckerberg, founder fo Facebook</div>
        </div>,
        <div className={styles.carouselCard}>
            <div className={styles.carouselCardText}>"Meeting Him gave me understanding of purpose of our lives"</div>
            <div className={styles.carouselCardAuthor}>Dalai Lama, spiritual leaders of the Tibetan people</div>
        </div>
    ]
    return (
        <div id="quotes" className={styles.quotesWrapper}>
            <h2 className={styles.quotesHeading}>Quotes</h2>
            <MediaQuery query="(min-width: 768px)">
                <Carousel
                    // Props: https://github.com/akiran/react-slick
                    autoplay
                    className={styles.carousel}
                    autoplaySpeed={'4000'}
                    draggable={true}
                    pauseOnHover={true}
                    effect={'fade'}>{quotes}</Carousel>
            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <Carousel
                    // Props: https://github.com/akiran/react-slick
                    autoplay
                    className={styles.carousel}
                    autoplaySpeed={'4000'}
                    draggable={true}
                    pauseOnHover={true}
                    effect={'fade'}>{quotes}</Carousel>
            </MediaQuery>
        </div>
    )
}


export default Quotes