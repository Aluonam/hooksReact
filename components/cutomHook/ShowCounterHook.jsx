import React from 'react'
import useCounter from './useCounter'

const ShowCounterHook = () => {

    const {counter, increase, decrement, reset}  = useCounter()
  return (
    <div >
        <h3>Counter with customHook:</h3>
        <div>{counter}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default ShowCounterHook