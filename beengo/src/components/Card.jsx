import { useEffect, useState, React } from 'react'
import styles from '../styles/card.module.css'
import { Row } from './index'
const numbers = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  [80, 81, 82, 83, 84, 85, 86, 87, 88, 90]
]

export const Card = () => {
  const [loading, setLoading] = useState(true)
  const [cardValues, setCardValues] = useState([])
  const [firstRow, setFirstRow] = useState([])
  const [secondRow, setSecondRow] = useState([])
  const [thirdRow, setThirdRow] = useState([])

  useEffect(() => {
    if (!cardValues || cardValues.length === 0) {
      createValues()
      createRows()
      setLoading(false)
    }
    return () => { }
  }, [])

  const createValues = () => {
    const values = []
    for (let i = 0; i < numbers.length; i++) {
      const shuffled = numbers[i].sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, 3)
      values.push({ number: selected, match: false })
    }
    setCardValues(values)
  }

  const createRows = (cardValues) => {
    for (let i = 0; i < cardValues.length; i++) {
      setFirstRow((firstRow) => [
        ...firstRow,
        { number: cardValues[i].number[0], selected: false }
      ])
      setSecondRow((secondRow) => [
        ...secondRow,
        { number: cardValues[i].number[1], selected: false }
      ])
      setThirdRow((thirdRow) => [
        ...thirdRow,
        { number: cardValues[i].number[2], selected: false }
      ])
    }
  }

  return !loading
    ? (
      <div className={styles.cardContainer}>
        <Row values={firstRow} />
        <Row values={secondRow} />
        <Row values={thirdRow} />
      </div>
      )
    : null
}
