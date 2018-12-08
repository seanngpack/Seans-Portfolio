import React from 'react'
import styles from './item.module.css'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const item = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
    <Link className={styles.link} to={`/` + props.data.fields.slug}>
      <Img        
        fluid={props.data.frontmatter.featuredImage.childImageSharp.fluid}
        alt={''}
        className={styles.image}
      />
      </Link>
    </div>
  )
}

export default item
