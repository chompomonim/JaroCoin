import React from 'react'

import telegramButton from '../../images/telegramButton.png'
import styles from './telegram.module.css'

function TelegramButton() {
  return (
    <a href="https://t.me/JaroCoin" className={styles.telegramButton} target="_blank">
      <img src={telegramButton} alt="Join telegram channel" title="Join telegram channel" />
    </a>
  )
}

export default TelegramButton
