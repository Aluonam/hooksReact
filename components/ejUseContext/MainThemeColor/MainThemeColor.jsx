import React from 'react'
import MainThemeLight from "./MainThemeColorLight.module.css"
import MainThemeDark from "./MainThemeColorDark.module.css"
import { ThemeContext } from '../context/ThemeChangeContext'
import { SwitchTheme } from '../components/SwitchTheme'


export const MainThemeColor = () => {

  const { theme } = React.useContext(ThemeContext);

  const MainThemeColorStyles = theme === 'light' ? MainThemeLight : MainThemeDark;

  return (
    <div className={MainThemeColorStyles.mainContainer}>
      <h1>{theme}</h1>
      <br></br>
      <SwitchTheme></SwitchTheme>
    </div>
  )
}
