import React from 'react'
import styles from './itemGenerator.module.css'
import Item from '../item/item'

const itemGenerator = props => {
  return (
    <div className={styles.container}>
      {props.data.edges.map(({ node }) => {
        return (
          <div className={styles.item} key={node.fields.slug}>
            <Item data={node}/>
          </div>
        )
        
      })}
    </div>
  )
}

export default itemGenerator
