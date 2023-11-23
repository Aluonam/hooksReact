import React, { useEffect, useState } from 'react'

const FormValidation = () => {

    const [inputData, setInputData] = useState("")
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        setIsValid(inputData.length >= 5)
    }, [inputData])
    

  return (
    <div>
        write a word, will it be valid?
        <br/>
        <input onChange={(e)=>{setInputData(e.target.value)}}></input>
        <p>{isValid ? 'Is valid' : 'Its to sort'}</p>
        </div>
  )
}

export default FormValidation