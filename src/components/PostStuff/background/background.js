import React from 'react'
import styles from './background.module.css'

const background = props => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Background</h2>
        <div className={styles.content}>
          {props.background}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <div className={styles.dateContainer}>
            DATE <span className={styles.date}>{props.date}</span>
          </div>

          {props.skills ? (
            <div className={styles.skillsContainer}>
              SKILLS <span className={styles.skills}>{props.skills}</span>
            </div>
          ) : null}

          {props.state ? (
            <div className={styles.stateContainer}>
              STATE <span className={styles.state}>{props.state}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default background
