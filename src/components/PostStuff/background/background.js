import React from 'react'
import styles from './background.module.css'

const background = props => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Background</h2>
        <div className={styles.content}>
          I made this robotic arm during winter break of 2017. I utilized my
          design skills, part sourcing abilities, and programming to make this
          project come together.
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <div className={styles.dateContainer}>
            DATE <span className={styles.date}>{props.date}</span>
          </div>
          <div className={styles.skillsContainer}>
            SKILLS <span className={styles.skills}>{props.skills}</span>
          </div>
          <div className={styles.stateContainer}>
            STATE <span className={styles.state}>{props.state}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default background
