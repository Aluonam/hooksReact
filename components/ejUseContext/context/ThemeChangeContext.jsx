import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({theme:"light",handleChangeTheme:()=>{}}); //Añado esto por defecto para que no de error en la primera carga.

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

   const handleChangeTheme = ()=>{
    setTheme(theme === 'light' ? 'dark' : 'light');
   }

   const contextValues = {
    theme,
    handleChangeTheme,
   }

    return (
        <ThemeContext.Provider value={contextValues}>
            {children}
        </ThemeContext.Provider>
    );
};