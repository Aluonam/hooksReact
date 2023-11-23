import React, { useEffect, useState } from 'react'

const EjApiCall = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {

        const fetchData = async ()=>{
            try{
                const dataFetch = await fetch(`https://v2.jokeapi.dev/joke/Programming?lang=es`)
                const data = await dataFetch.json()
                setDataAPI(data)
            } catch(error){error, "error detected"}
        }
        fetchData()
    }, [])
    
  return (
    <div>
        {dataAPI.joke}
    </div>
  )
}

export default EjApiCall