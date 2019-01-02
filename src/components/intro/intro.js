import React from 'react'
import styles from './intro.module.css'

const intro = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        Hi, I'm Sean Ng Pack 👨🏻‍💻. I'm a mechanical engineering student{' '}
        <a
          className={styles.school}
          target='_blank'
          href="http://www.coe.neu.edu/"
        >
          @NU{' '}
        </a>{' '}
        who loves <span className={styles.productDesign}>product design</span>{' '}
        and <span className={styles.programming}>programming</span>
      </h1>

      <span className={styles.lol}>( I built this website myself! )</span>
    </div>
  )
}

export default intro
