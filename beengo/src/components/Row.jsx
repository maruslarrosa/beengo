import React, { useEffect, useState } from 'react'
import styles from '../styles/row.module.css'
import { Cell } from './index'
const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const Row = ({ values }) => {
  const [loading, setLoading] = useState(true)
  let toRemove = []
  useEffect(() => {
    removeValues()
    setLoading(false)
    return () => {
    }
  }, [])

  const removeValues = () => {
    toRemove = (columns.sort(() => 0.5 - Math.random())).slice(0, 4)
    for (let i = 0; i < toRemove.length; i++) {
      values[toRemove[i]] = null
    }
  }

  return (
    loading
      ? <p>Loading</p>
      : <div className={styles.rowContainer}>
      {values.map((cell, index) => (
        <Cell props={cell} key={index} />
      ))}
    </div>
  )
}
