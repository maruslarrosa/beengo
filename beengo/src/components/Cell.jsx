import { React, useState } from 'react'
import styles from '../styles/row.module.css'

export const Cell = ({ props }) => {
  const [cell, setCell] = useState(props)

  const handleCellClick = (cell) => {
    setCell({ number: cell.number, selected: !cell.selected })
  }

  return (
    cell
      ? <button
        onClick={() => handleCellClick(cell)}
        className={cell.selected ? styles.selected : ''}
      >
        {cell.number}
      </button>
      : <button className={styles.noValue}></button>
  )
}
