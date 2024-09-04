import { useState } from 'react'

const useCounter = () => {
 const [counter, setCounter] = useState(0);

 const increase = ()=>setCounter(counter+1)
 const decrement = ()=>setCounter(counter-1)
 const reset = ()=>setCounter(0)
 
  // IMPORTANTE el return es con {}
 return{ //No vamos a pasar setCounter porque entonces el manejo del estado volveria a estar fuera del hook, y he creado el customehook precisamente para manejar el estado aquí.
  counter,
  increase,
  decrement,
  reset
 }
}

export default useCounter;