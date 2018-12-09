import React from 'react'
import styles from './intro.module.css'

const intro = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        Hi, I'm Sean Ng Pack 👨🏻‍💻. I'm a mechanical engineering student who also
        loves to code{' '}
      </h1>
      <span className={styles.lol}>( I built this website myself! )</span>
    </div>
  )
}

export default intro
