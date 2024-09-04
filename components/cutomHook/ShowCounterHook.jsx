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
    <div style={{width:'350px', height:'200px', border: '1px solid mediumseagreen', backgroundColor:'honeydew', display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Both counters are the same customHook</h3>
        <div>{counterA.counterDouble}</div>
        <div>
            <button onClick={counterA.increaseDouble}>+</button>
            <button onClick={counterA.decrementDouble}>-</button>
            <button onClick={counterA.resetDouble}>reset</button>
        </div>
        
        <div>{counterB.counterDouble}</div>
        <div>
            <button onClick={counterB.increaseDouble}>+</button>
            <button onClick={counterB.decrementDouble}>-</button>
            <button onClick={counterB.resetDouble}>reset</button>
        </div>
        
    </div>
    </>
  )
}

export default ShowCounterHook