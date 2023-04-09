import React, { useEffect, useState } from 'react'
import styles from '../styles/row.module.css'
import { Cell } from './index'
const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const Row = ({ values, ball, setIsLine }) => {
  const [loading, setLoading] = useState(true)
  const [line, setLine] = useState(0)

  useEffect(() => {
    removeValues()
    setLoading(false)
    return () => {
    }
  }, [])

  useEffect(() => {
    if (ball) {
      values.forEach(element => {
        if (element && element.number === ball) {
          element.selected = true
          setLine(line + 1)
        }
        if (line === 5) {
          setIsLine(true)
        }
      })
    }
  }, [ball])

  const removeValues = () => {
    const toRemove = (columns.sort(() => 0.5 - Math.random())).slice(0, 4)
    for (let i = 0; i < toRemove.length; i++) {
      values[toRemove[i]] = null
    }
  }

  return (
    loading
      ? <p>Loading</p>
      : <div className={styles.rowContainer}>
      {values.map((element, index) => (
        <Cell element={element} key={index} />
      ))}
    </div>
  )
}
