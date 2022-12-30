import { React, useState } from 'react'
import styles from '../styles/row.module.css'

export const Cell = ({ props }) => {
  const [cell, setCell] = useState(props)

  const handleCellClick = (cell) => {
    setCell({ number: cell.number, selected: true })
  }

  return (
    <p
      key={cell.number}
      onClick={() => handleCellClick(cell)}
      className={cell.selected ? styles.selected : ''}
    >
      {cell.number}
    </p>
  )
}
