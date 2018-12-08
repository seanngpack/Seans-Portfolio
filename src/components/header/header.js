import React from 'react';
import styles from './header.module.css'
import { Link } from '@reach/router';

const header = () => {
    return ( 
        <div className={styles.container}>
            <Link className={styles.link} to={`/`}>
                <div className={styles.item1}>work</div>
            </Link>
            <div className={styles.item2}>about</div>
        </div>
     );
}
 
export default header;