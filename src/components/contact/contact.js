import React from 'react'
import styles from './contact.module.css'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Let's connect!</h1>
      <div className={styles.iconsContainer}>
        <a
          href="https://www.github.com/seanngpack"
          target="_blank"
          rel="noopener norefferer"
        >
          <FaGithub size={60} className={styles.FaGithub} />
        </a>
        <a
          href="https://www.instagram.com/seanngpack"
          target="_blank"
          rel="noopener norefferer"
        >
          <FaInstagram size={60} className={styles.FaInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/seanngpack"
          target="_blank"
          rel="noopener norefferer"
        >
          <FaLinkedin size={60} className={styles.FaLinkedin} />
        </a>
      </div>
    </div>
  )
}

export default contact
