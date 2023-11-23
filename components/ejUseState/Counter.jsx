import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)
  return (
    <>
    {counter}
    <button onClick={()=>{setCounter(counter + 1)}}>+</button>
    <button onClick={()=>{setCounter(counter - 1)}}>-</button>
    </>
  )
}

export default Counter