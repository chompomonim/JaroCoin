import React from 'react'

import { Carousel } from 'antd'
import MediaQuery from 'react-responsive'

import styles from './quotes.module.css'

function Quotes() {
    const quotes = [
        <div className={styles.carouselCard} key={1}>
            <div className={styles.carouselCardText}>"Everything will be tokenized and connected by a blockchain one day"</div>
            <div className={styles.carouselCardAuthor}>Fred Ehrsam, co-founder of Coinbase</div>
        </div>,
        <div className={styles.carouselCard} key={2}>
            <div className={styles.carouselCardText}>"The ability to create something which is not duplicable in the digital world has enormous value…Lot’s of people will build businesses on top of that."</div>
            <div className={styles.carouselCardAuthor}>Eric Schmidt, executive Chairman of Google</div>
        </div>,
        <div className={styles.carouselCard} key={3}>
            <div className={styles.carouselCardText}>"There are very few fundamental shifts in global infrastructure that can happen in our life times. The financial infrastructure is one of them, and the Blockchain is changing the way we think about the transfer of value."</div>
            <div className={styles.carouselCardAuthor}>Adam Draper, founder and Managing Director of Boost VC</div>
        </div>,
        <div className={styles.carouselCard} key={4}>
            <div className={styles.carouselCardText}>"PayPal had these goals of creating a new currency. We failed at that, and we just created a new payment system."</div>
            <div className={styles.carouselCardAuthor}>Peter Thiel, co-founder of PayPal</div>
        </div>,
        <div className={styles.carouselCard} key={5}>
            <div className={styles.carouselCardText}>"I think the internet is going to be one of the major forces for reducing the role of government. The one thing that’s missing but that will soon be developed, is a reliable e-cash."</div>
            <div className={styles.carouselCardAuthor}>Milton Friedman, laureat of Nobel Memorial Prize in Economic Sciences</div>
        </div>
    ]
    return (
        <div id="quotes" className={styles.quotesWrapper}>
            <h2 className={styles.quotesHeading}>Quotes</h2>
                <Carousel
                    // Props: https://github.com/akiran/react-slick
                    autoplay
                    className={styles.carousel}
                    autoplaySpeed={'5000'}
                    draggable={true}
                    pauseOnHover={true}
                    effect={'fade'}>
                    {quotes}
                </Carousel>
        </div>
    )
}


export default Quotes