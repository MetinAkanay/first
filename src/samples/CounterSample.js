import React, { useState } from 'react'

function CounterSample() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    if (counter <= 9) {
      setCounter(counter + 1)
      if (counter === 10) {

      }
    }

  }
  const decrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }

  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement} disabled={counter === 0}>Azalt</button>
      <button onClick={increment} disabled={counter === 10}>Arttır</button>

    </div>
  )
}

export default CounterSample