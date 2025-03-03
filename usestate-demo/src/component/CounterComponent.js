/* 간단한 숫자 증가 예제 */
import React, { useState } from 'react'

function CounterComponent() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count+1);
  }

  const handleReset = () => {
    setCount(0);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterComponent