import React, { useContext, useState } from 'react'

export const contextTheme = useContext()

const ChangeTheme = () => {

    const [colorTheme, setColorTheme] = useState('ligth');

    const valuesProvider = {
        colorTheme,
        setColorTheme,
    }

  return (
    <>
    <contextTheme.Provider value={valuesProvider}>
        {props.children}
    </contextTheme.Provider>
    </>
  )
}

export default ChangeTheme