import React from 'react';
import styles from './header.module.css'

const header = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.item1}>work</div>
            <div className={styles.item2}>about</div>
        </div>
     );
}
 
export default header;