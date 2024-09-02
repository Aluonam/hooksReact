import React from 'react'
import useCounter from './useCounter'
import useDoubleCounter from './useDoubleCounter'

const ShowCounterHook = () => {

    const {counter, increase, decrement, reset}  = useCounter()

    const counterA = useDoubleCounter()
    const counterB = useDoubleCounter()

  return (
    <>
    <div style={{width:'300px', height:'150px', border: '1px solid blue', backgroundColor:'aliceblue', display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Counter with customHook:</h3>
        <div>{counter}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div> 
    <div style={{width:'300px', height:'150px', border: '1px solid mediumseagreen', backgroundColor:'honeydew', display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <div>{counterA.counterDouble}</div>
        <div>{counterB.counterDouble}</div>
    </div>
    </>
  )
}

export default ShowCounterHook