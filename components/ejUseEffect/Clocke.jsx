import React, { useEffect, useState } from 'react'

const Clocke = () => {

    const [date, setDate] = useState()

    useEffect(() => {
      const interval = setInterval(()=>{
        const hour = new Date()
        setDate(hour.toLocaleString().split(",")[1])
      }, 1000)

      return ()=>{clearInterval(interval)}
    }, [])
    
  return (
    <div> The current time is: {date}</div>
  )
}

export default Clocke