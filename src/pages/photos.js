import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styles from './photos.module.css'
import Layout from '../components/Layout'
import Photo from '../components/photo/photo'
import SEO from '../components/SEO/SEO'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        photoDescriptions: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(photos)/"  }}
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
                fullImage {
                  childImageSharp {
                    fluid(maxWidth: 4000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
        <SEO
          title={"Sean's cool photos"}
          description={
            'I love telling stories and visualizing flex through photography and photo editing'
          }
          image={''}
          pathname={'/photos'}
          
        />
        <div className={styles.page}>
          {data.photoDescriptions.edges.map((node, index) => {
            return <Photo data={node} key={index} />
          })}
        </div>
      </Layout>
    )}
  />
)
