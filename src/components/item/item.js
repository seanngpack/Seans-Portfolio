import React from 'react'
import styles from './item.module.css'
import Img from 'gatsby-image'

const item = (props) => {
  return (
    <div className={styles.container}>
      <Img        
        fluid={props.data.frontmatter.featuredImage.childImageSharp.fluid}
        alt={''}
        className={styles.image}
      />
    </div>
  )
}

export default item
