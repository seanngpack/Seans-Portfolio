import React from 'react';
import styles from './intro.module.css'

const intro = (props) => {
    console.log(props)
    return ( 
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.header}>{props.title}</h1>
                <h2 className={styles.excerpt}>{props.excerpt}</h2>
            </div>
            <div className={styles.right}>
                [insert logo here]
            </div>
        </div>
     );
}
 
export default intro;