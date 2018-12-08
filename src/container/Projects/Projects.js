import React, { Component } from 'react'
import styles from './Projects.module.css'
import ItemGenerator from '../../components/itemGenerator/itemGenerator'

class Projects extends Component {
  state = {
    div1: true,
    div2: false,
    div3: false,
  }

  handleClick = (divNumber) => {
    this.setState({ divNumber: !this.state.divNumber })
    console.log(divNumber + 'is at ' + this.state.divNumber)
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.header}>I really enjoy sharing my projects</h2>
        <div className={styles.categories}>
          <div
            className={styles.category}
            onClick={() => this.handleClick('div1')}
          >
            Featured
          </div>
          <div
            className={styles.category}
            onClick={() => this.handleClick('div2')}
          >
            Robotics
          </div>
          <div
            className={styles.category}
            onClick={() => this.handleClick('div3')}
          >
            Programming
          </div>
        </div>
        <ItemGenerator data={this.props.data} />
      </div>
    )
  }
}

export default Projects
