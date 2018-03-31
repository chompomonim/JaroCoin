import React, { Component } from 'react'

import { Carousel } from 'antd'
import { Row, Col } from 'antd'
import { Icon } from 'antd'

import MediaQuery from 'react-responsive'

import styles from './quotes.module.css'


class Quotes extends Component {
    render() {
        return (
            <div id="quotes" className={styles.quotesWrapper}>
                <h2 className={styles.quotesHeading}>Quotes</h2>
                <MediaQuery query="(min-width: 768px)">
                    <Carousel
                        // Props: https://github.com/akiran/react-slick
                        autoplay
                        className={styles.carousel}
                        // arrows={true}
                        autoplaySpeed={'4000'}
                        draggable={true}
                        pauseOnHover={true}
                        effect={'fade'}
                        // centerMode={true}
                    >
                        <div className={styles.carouselCard}>
                            <div className={styles.carouselCardText}>"One of the smartest men I've ever met"</div>
                            <div className={styles.carouselCardAuthor}>Elon Musk, founder fo Tesla</div>
                        </div>
                        <div className={styles.carouselCard}>
                            <div className={styles.carouselCardText}>"This person, helped me to change my thinking"</div>
                            <div className={styles.carouselCardAuthor}>Mark Zuckerberg, founder fo Facebook</div>
                        </div>

                    </Carousel>
                </MediaQuery>

                <MediaQuery query="(max-width: 767px)">
                    <Carousel
                        // Props: https://github.com/akiran/react-slick
                        autoplay
                        className={styles.carousel}
                        // arrows={true}
                        autoplaySpeed={'4000'}
                        draggable={true}
                        pauseOnHover={true}
                        effect={'fade'}
                        // centerMode={true}
                    >
                        <div className={styles.carouselCard}>
                            <div className={styles.carouselCardTextMobile}>"One of the smartest men I've ever met"</div>
                            <div className={styles.carouselCardAuthorMobile}>Elon Musk, founder fo Tesla</div>
                        </div>
                        <div className={styles.carouselCard}>
                            <div className={styles.carouselCardTextMobile}>"This person, helped me to change my thinking"</div>
                            <div className={styles.carouselCardAuthorMobile}>Mark Zuckerberg, founder fo Facebook</div>
                        </div>
                    </Carousel>
                </MediaQuery>
            </div>
        );
    }
}

export default Quotes