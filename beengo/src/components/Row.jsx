import React from 'react'
import styles from '../styles/row.module.css'
import { Cell } from './index'

export const Row = ({ values }) => {
  return (
    <div className={styles.rowContainer}>
      {values.map((cell, index) => (
        <Cell props={cell} key={index} />
      ))}
    </div>
  )
}
