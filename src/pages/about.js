import React from 'react'
import { graphql } from 'gatsby'
import styles from './about.module.css'
import Layout from '../components/Layout'
import Intro from '../components/PostStuff/intro/intro'

import CarouselLol from '../container/CarouselPage/index'

class BlogPostTemplate extends React.Component {
  render() {
      console.log(this.props.data)
    return (
      <Layout>
        <div className={styles.container}>
          <Intro title={'Sean Ng Pack'} excerpt={'whats up'} logo={this.props.data.profile.childImageSharp.fluid} />
          <div className={styles.page} />
          the bulk of the content goes here lol, this is the page
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    profile: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
