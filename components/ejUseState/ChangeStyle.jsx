import React, { useState } from 'react'

const ChangeStyle = () => {

    const [isRed, setIsRed] = useState(false)

    const styleButton = {
        backgroundColor: isRed ? 'red' : 'green',
        color: 'white',
        padding: '10px',
        cursor: 'pointer',
    }

  return (
    <button
        style={styleButton}
        onClick={()=>{setIsRed(!isRed)}}
        >Change color</button>
  )
}

export default ChangeStyle