import React, { Component } from 'react'
import styles from './intro.module.css'
import Img from 'gatsby-image'
class into extends Component {
  state = {
  }

  render() {
    var style = {
      backgroundColor: this.props.color,
    }

    return (
      <div style={style} className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.header}>{this.props.title}</h1>
          <h2 className={styles.excerpt}>{this.props.excerpt}</h2>
        </div>
        <div className={styles.right}>
          {this.props.logo === 'null' ? null : (
            <Img fluid={this.props.logo} alt={''} className={styles.image} />
          )}
        </div>
      </div>
    )
  }
}

export default into
