import React from 'react';
import styles from './intro.module.css'

const intro = (props) => {
    console.log(props)
    return ( 
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <h2>{props.excerpt}</h2>
        </div>
     );
}
 
export default intro;