import React from 'react'
import useCounter from './useCounter'

const ShowCounterHook = () => {

    const {counter, increase, decrement, reset}  = useCounter()
  return (
    <>
    <div style={{width:'300px', height:'150px', border: '1px solid blue', backgroundColor:'aliceblue', display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Counter with customHook:</h3>
        <div>{counter}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div> 
    <div>
        
    </div>
    </>
  )
}

export default ShowCounterHook