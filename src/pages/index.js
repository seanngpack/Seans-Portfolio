import React from 'react'
import styles from './index.module.css'
import "katex/dist/katex.min.css"
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Intro from '../components/intro/intro'
import Projects from '../container/Projects/Projects'
import Contact from '../components/contact/contact'
import Experience from '../components/experience/experience'
import SEO from '../components/SEO/SEO'
class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title={'Sean\'s portfolio site'}
          description={'Hi, I\'m Sean Ng Pack 👨🏻‍💻. I\'m a mechanical engineering student @Northeastearn who loves product design and programming'}
          image={'/assets/gatsby-icon.png'}
          pathname={'/'}
          article
        />
        <div className={styles.container}>          
            <div className={styles.into}><Intro /> </div>         
            <div className={styles.projects}><Projects data={this.props.data} /></div>
            <div className={styles.experience}><Experience /></div>
            <div className={styles.contact}><Contact /></div>
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
            date
            title
            tag
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
    featured: allMarkdownRemark(
      filter: {frontmatter: {featured: {eq: "yes"}}}
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            tag
            backgroundColor
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    robots: allMarkdownRemark(
      filter: {frontmatter: {tag: {eq: "robots"}}}
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            tag
            backgroundColor
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    programming: allMarkdownRemark(
      filter: {frontmatter: {tag: {eq: "programming"}}}
      sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            tag
            backgroundColor
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: CENTER) {
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
