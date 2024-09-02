import { useState } from 'react'

const useDoubleCounter = ()=>{
    const [counterDouble, setCounterDouble] = useState(0);

    const increaseDouble = ()=>setCounterDouble(counterDouble+1)
    const decrementDouble = ()=>setCounterDouble(counterDouble-1)
    const resetDouble = ()=>setCounterDouble(0)

    return{
        counterDouble,
        increaseDouble,
        decrementDouble,
        resetDouble
    }
}

export default useDoubleCounter