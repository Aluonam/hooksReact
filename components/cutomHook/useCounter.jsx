import React, { useState } from 'react'

const useCounter = () => {
 const [counter, setCounter] = useState(0);

 const increase = ()=>setCounter(counter+1)
 const decrement = ()=>setCounter(counter-1)
 const reset = ()=>setCounter(0)
  
}

export default function App(){
   return (
    <div>
   
    </div>
   )
}