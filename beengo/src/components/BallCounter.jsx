import { React, useEffect, useState } from 'react'
import styles from '../styles/ballCounter.module.css'

const balls = (Array.from({ length: 91 }, (x, i) => i)).sort(() => 0.5 - Math.random())

export const BallCounter = ({ setBall }) => {
  const [newBall, setNewBall] = useState(null)
  const [lastBalls, setLastBalls] = useState([])
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (start) {
      getNewBall()
    }
    const timer = setInterval(() => {
      if (balls.length && start) {
        getNewBall()
      } else {
        clearTimeout(timer)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [start])

  const getNewBall = () => {
    const ball = balls.shift()
    setBall(ball)
    setNewBall(ball)
    setLastBalls((lastBalls) => [ball, ...lastBalls])
    console.log(balls)
  }

  return (<div className={styles.container}>
    {
      start
        ? <>
          <div className={styles.newBall}>{newBall}</div>
          <div className={styles.lastBallsContainer}>
            {
              lastBalls.map(number => <p key={number} className={styles.lastBall}>{number}</p>)
            }
          </div>
        </>
        : <button onClick={() => setStart(true)}>Empezar</button>
    }

  </div>)
}
