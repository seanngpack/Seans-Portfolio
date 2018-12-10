import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from './Indicator.module.css'

const Pip = styled.span`
  background: ${props => (props.isCurrent ? 'grey' : 'gainsboro')};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-block;
  transition: background 0.5s ease;
  cursor: pointer;

  @media (min-width: 767px) {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`

class Indicator extends Component {
  render() {
    const { length, position } = this.props

    return (
      <div className={styles.container}>
        {Array.from({ length }, (pip, i) => (
          <Pip key={i} isCurrent={i === position} />
        ))}
      </div>
    )
  }
}

Indicator.propTypes = {
  length: PropTypes.number,
  position: PropTypes.number,
}

export default Indicator
