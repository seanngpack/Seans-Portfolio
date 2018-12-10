import React, { Component } from 'react';
import Img from 'gatsby-image'
import styles from './index.module.css'

import Carousel from '../../components/Carousel'
import CarouselItem from './CarouselItem'

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Carousel>
        
            {this.props.images.map((image, index) => (
              <Img
                fluid={image.childImageSharp.fluid}
                alt={image.name}
                className={styles.image}
              />
            ))}
          
        </Carousel>
      </div>
    );
  }
}


