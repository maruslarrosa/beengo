import React, { useState } from 'react'
import './App.css'
import { BallCounter, Card } from './components'

function App () {
  const [ball, setBall] = useState(null)
  return (
    <div>
      <Card ball={ball}/>
      <BallCounter setBall={setBall}/>
    </div>
  )
}

export default App
