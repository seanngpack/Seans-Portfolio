import React, { Component } from 'react'
import styles from './Projects.module.css'
import ItemGenerator from '../../components/itemGenerator/itemGenerator'
import Indicator from '../../components/indicator/indicator'

class Projects extends Component {
  state = {
    div1: true,
    div2: false,
    div3: false,
    resolver: 'featured',
  }

  handleClick = divNumber => {
    this.setState({ div1: false, div2: false, div3: false }, () => {
      this.setState({ [divNumber]: true }, () => {
        if (this.state.div1) {
          this.setState({ resolver: 'featured' })
        } else if (this.state.div2) {
          this.setState({ resolver: 'robots' })
        } else if (this.state.div3) {
          this.setState({ resolver: 'programming' })
        }

        //insert console log (lol) here to check this sick async function
      })
    })
  }

  render() {
    console.log(this.props.data)
    return (
      <div className={styles.container}>
      <Indicator />
        <h1 className={styles.header}>I really enjoy sharing my projects</h1>
        <div className={styles.categories}>
          <div
            className={styles[this.state.div1 ? 'categoryActive' : 'category']}
            onClick={() => this.handleClick('div1')}
          >
            Featured
          </div>
          <div
            className={styles[this.state.div2 ? 'categoryActive' : 'category']}
            onClick={() => this.handleClick('div2')}
          >
            Robots
          </div>
          <div
            className={styles[this.state.div3 ? 'categoryActive' : 'category']}
            onClick={() => this.handleClick('div3')}
          >
            Programming
          </div>
        </div>
        <ItemGenerator data={this.props.data[this.state.resolver]} />
      </div>
    )
  }
}

export default Projects
