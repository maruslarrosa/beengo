import { React, useEffect, useState } from 'react'
import styles from '../styles/cell.module.css'

export const Cell = ({ element }) => {
  const [cell, setCell] = useState(element)

  const handleCellClick = (cell) => {
    setCell({ number: cell.number, selected: !cell.selected })
  }

  useEffect(() => {
    console.log(cell)
  }, [cell])

  return (
    cell
      ? <button
        onClick={() => handleCellClick(cell)}
        className={cell.selected ? styles.selected : styles.cell}
      >
        {cell.number}
      </button>
      : <button className={styles.noValue}></button>
  )
}
