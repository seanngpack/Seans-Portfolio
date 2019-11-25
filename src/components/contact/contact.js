import React from 'react'
import styles from './contact.module.css'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Indicator from '../indicator/indicator'

const contact = () => {
  return (
    <div className={styles.container}>
    <Indicator />
      <h1 className={styles.header}>If you want to talk tech, photography, or life in general just hit me up!</h1>
      <div className={styles.iconsContainer}>
        <a
          href="https://www.github.com/seanngpack"
          target="_blank"
          rel="noopener norefferer"
          className={styles.iconContainer}
        >
          <FaGithub className={styles.FaGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/seanngpack"
          target="_blank"
          rel="noopener norefferer"
          className={styles.iconContainer}
        >
          <FaLinkedin className={styles.FaLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/seanngpack"
          target="_blank"
          rel="noopener norefferer"
          className={styles.iconContainer}
        >
          <FaInstagram className={styles.FaInstagram} />
        </a>
      </div>
    </div>
  )
}

export default contact
