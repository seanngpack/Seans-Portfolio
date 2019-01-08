import React from 'react'
import { graphql } from 'gatsby'
import styles from './about.module.css'
import Layout from '../components/Layout'
import Intro from '../components/PostStuff/intro/intro'
import SEO from '../components/SEO/SEO'

import CarouselLol from '../container/CarouselPage/index'

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <Layout>
        <SEO
          title='About Sean Ng Pack'
          description='Sean Ng Pack, Mechanical Engineering and more'
          image={this.props.data.profile.childImageSharp.fluid.src}
          pathname={'/about'}
          article
        />
        <div className={styles.container}>
          <Intro
            title={'Sean Ng Pack'}
            excerpt={'This page is dedicated to information about me'}
            logo={this.props.data.profile.childImageSharp.fluid}
          />
          <div className={styles.page}>
            <p>
              I really do it all--fashion, photography, design, engineering,
              computer science, writing, tennis, pool, piano and a vast array of
              esoteric hobbies. I work hard and fail fast to become better at my pursuits. 
            </p>
            I like giving back to communities, I'm very active and well-known in
            several prominent communities for fashion, photography, and pool. I lead
            discussions and provide insight that has never been brought up before
            <p />
            <p>
              In addition to participating in communities, I like creating new
              things. In High school I co-founded the MHS Recycling Club which
              grew to be the school's largest organization. At Northeastern I
              co-founded the NU Pool Club and now head the school's Pool Team. I
              also created Lengjai, an Asian-centric fashion/culture news
              platform to empower Asian-Americans and increase representation in
              the media.
            </p>
            <p>
              I am a life-long learner and love combining my passions into
              awesome creations. I think my strong mechanical engineering
              knowledge, computer science skills, and design intuition are a
              deadly combo for developing projects that are unlike any other.
            </p>            
          </div>
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
