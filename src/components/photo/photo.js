import React, { Component } from 'react'
import Img from 'gatsby-image'
import styles from './photo.module.css'
import Modal from 'react-modal'

class Photo extends Component {
  state = {
    showModal: false,
  }

  openModal = () => {
    this.setState({ showModal: true })
    console.log('triggered')
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  componentDidMount() {
    Modal.setAppElement('body')
  }

  render() {
    return (
      
        
        <div className={styles.container}>
        <Modal
          isOpen={this.state.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <div>
            <Img
              fluid={
                this.props.data.node.frontmatter.featuredImage.childImageSharp
                  .fluid
              }
              alt={this.props.data.node.frontmatter.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <div className={styles.title}>Example title</div>
                <div className={styles.specs}>example | specs | lol</div>
              </div>
            </div>
          </div>
        </Modal>
          <Img
            
            fluid={
              this.props.data.node.frontmatter.featuredImage.childImageSharp
                .fluid
            }
            alt={this.props.data.node.frontmatter.title}
            className={styles.image}
          />
          <div onClick={() => this.openModal()} className={styles.overlay}>
            <div className={styles.textContainer}>
              <div className={styles.title}>Example title</div>
              <div className={styles.specs}>example | specs | lol</div>
            </div>
          </div>
        </div>
      
    )
  }
}

export default Photo
