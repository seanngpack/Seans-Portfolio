import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styles from './photos.module.css'
import Layout from '../components/Layout'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        photoDescriptions: allMarkdownRemark(
          filter: { collection: { eq: "photos" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                camera
                title
                ISO
                shutter
                aperture
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
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className={styles.page}>
          {data.photoDescriptions.edges.map((node, index) => {
            return (
              <div className={styles.container}>
                <Img
                  fluid={
                    node.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  alt={node.node.frontmatter.title}
                  key={index}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.textContainer}>
                    <div className={styles.title}>Example title</div>
                    <div className={styles.specs}>example | specs | lol</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )}
  />
)
