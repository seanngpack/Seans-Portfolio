import React from 'react';
import styles from './footer.module.css'

const footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.credits}>Built by Sean Ng Pack© </div>
            <div className={styles.ok}></div>
        </div>
     );
}
 
export default footer;