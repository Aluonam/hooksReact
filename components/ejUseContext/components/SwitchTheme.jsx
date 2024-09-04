import React from 'react'
import { ThemeContext } from '../MainThemeColor/MainThemeColor'

export const SwitchTheme = () => {

    const { theme, handleChangeTheme } = React.useContext(ThemeContext);
    const buttonText = theme === 'light' ? 'Change to Dark' : 'Change to Light';
  return (
    <button onClick={handleChangeTheme}> {buttonText} </button>
  )
}
