import React from 'react'
import styles from './index.module.css'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Intro from '../components/intro/intro'
import Projects from '../container/Projects/Projects'
class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.intro}>
            <Intro />
          </div>
          <div className={styles.projects}>
            <Projects data={this.props.data.allMarkdownRemark} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
