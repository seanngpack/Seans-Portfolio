import React from 'react'
import styles from './experience.module.css'
import ExperienceItem from '../experienceItem/experienceItem'

const experience = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>See what I've been up to</h1>
      <div className={styles.experienceContainer}>
        <ExperienceItem
          company={'Speck Products'}
          position={'Mechanical Design Engineer'}
          startDate={'July 2018'}
          endDate={'Dec 2018'}
          description={
            'At Speck I honed my sketching skills and I brought several products to market '
          }
        />
        <ExperienceItem
          company={'Northeastern University'}
          position={'Undergrad Research Assistant'}
          startDate={'Sept 2017'}
          endDate={'Jul 2018'}
          description={
            'I worked in Dr. Randall Erbs lab researching magnetically aligned materials for 3D printers'
          }
        />
        <ExperienceItem
          company={'NxStage Medical'}
          position={'Equipment Engineer'}
          startDate={'Jul 2017'}
          endDate={'Dec 2017'}
          description={
            'I flew to Mexico to complete V&V testing and designed a model of a pump using Simulink'
          }
        />
      </div>
    </div>
  )
}

export default experience
