import React from 'react'
import { Link, graphql } from 'gatsby'
import styles from './blog-post.module.css'
import Layout from '../components/Layout'
import Intro from '../components/PostStuff/intro/intro'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const excerpt = post.frontmatter.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className={styles.container}>
          <Intro title={post.frontmatter.title} excerpt={excerpt}/>          
          <div className={styles.date}>{post.frontmatter.date}</div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id      
      html
      frontmatter {
        excerpt
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
