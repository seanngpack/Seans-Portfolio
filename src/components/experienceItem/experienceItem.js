import React from 'react';
import styles from './experienceItem.module.css'

const experienceItem = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.company}>{props.company} •&nbsp; </div> 
                <div className={styles.position}> {props.position}</div>
            </div>
            <div className={styles.date}>
                <div className={styles.startDate}>{props.startDate} - &nbsp;</div>
                <div className={styles.endDate}>{props.endDate} &nbsp;</div>
            </div>
            <div className={styles.description}>{props.description}</div>
        </div>
     );
}
 
export default experienceItem;