import React from 'react'
import styles from './experience.module.css'
import ExperienceItem from '../experienceItem/experienceItem'

const experience = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>What have I been up to?</h1>
      <div className={styles.experienceContainer}>
        <ExperienceItem
          company={'Speck Products'}
          position={'Mechanical Design Engineer Co-op'}
          startDate={'July 2018'}
          endDate={'Dec 2018'}
          description={
            'At Speck I honed my sketching skills and I helped bring several products to market'
          }
        />
        <ExperienceItem
          company={'Northeastern University'}
          position={'Research Assistant'}
          startDate={'Sept 2017'}
          endDate={'Jul 2018'}
          description={
            'I worked in Dr. Randall Erbs lab researching magnetically aligned materials for 3D printers'
          }
        />
        <ExperienceItem
          company={'NxStage Medical'}
          position={'Equipment Engineer Co-op'}
          startDate={'Jul 2017'}
          endDate={'Dec 2017'}
          description={
            'I flew to Mexico to complete V&V testing and designed a model of a pump using Simulink'
          }
        />
        <ExperienceItem
          company={'Northeastern University'}
          position={'Computing Consultant III'}
          startDate={'Jun 2015'}
          endDate={'April 2017'}
          description={
            'I worked at Northeastern\'s ResNet diagnosing issues with studen-owned computers and fixing them'
          }
        />
      </div>
    </div>
  )
}

export default experience
