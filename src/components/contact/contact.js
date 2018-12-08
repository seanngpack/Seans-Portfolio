import React from 'react';
import styles from './contact.module.css'
import { FaGithub, FaLink } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const contact = () => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.header}>Let's connect!</h1>
            <div className={styles.iconsContainer}>
                <FaGithub size={60} className={styles.FaGithub} />
                <FaInstagram size={60} className={styles.FaInstagram} />
                <FaLinkedin size={60} className={styles.FaLinkedin} />
            </div>
        </div>
     );
}
 
export default contact;