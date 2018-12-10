import React, { Component } from 'react'
import styles from './carousel.module.css'
import Img from 'gatsby-image'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

class carousel extends Component {
  state = {
    image1: true,
    image2: false,
    image3: false,
    image4: false,
    count: 1,
  }

  stateFlip = () => {
    let name = 'image'
    this.setState(
      { image1: false, image2: false, image3: false, image4: false },
      () => {
        this.setState({ [name + this.state.count]: true })
      }
    )
  }

  rightClick = () => {
    const max = this.props.images.length
    this.state.count < max
      ? this.setState({ count: this.state.count + 1 }, () => {
          this.stateFlip()
        })
      : null
  }

  leftClick = () => {
    this.state.count > 1
      ? this.setState({ count: this.state.count - 1 }, () => {
          this.stateFlip()
        })
      : null
  }

  render() {
    let count = 0
    const max = this.props.images.length
    return (
      <div className={styles.container}>
        {this.state.count === 1 ? (
          <FaArrowLeft size={40} color={'white'} />
        ) : (
          <FaArrowLeft
            onClick={() => this.leftClick()}
            size={40}
            className={styles.FaArrowLeft}
          />
        )}
        <div className={styles.imageContainer}>
          {this.props.images.map(
            (image, index) => (
              (count = index + 1),
              (name = 'image' + count),
              (
                <div
                  className={this.state[name] ? styles[name] : null}
                  key={index}
                >
                  <Img
                    fluid={image.childImageSharp.fluid}
                    alt={image.name}
                    className={styles.image}
                  />
                </div>
              )
            )
          )}
        </div>
        {this.state.count === 4 ? (
          <FaArrowRight size={40} color={'white'} />
        ) : (
          <FaArrowRight
            onClick={() => this.rightClick()}
            size={40}
            className={styles.FaArrowRight}
          />
        )}
      </div>
    )
  }
}

export default carousel
