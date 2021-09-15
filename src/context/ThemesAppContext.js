import React, { createContext, useState } from 'react'

export const ThemeAppContext = createContext()

 const ThemeAppProvider = ({children}) => {

  const [theme, setTheme] =  useState("ligth")

  const HandleToggleTheme = () => {
    theme === "dark" ? setTheme("ligth") : setTheme("dark") 
  }

  const data = {theme, HandleToggleTheme}

  return (
      <ThemeAppContext.Provider value = {data}>
        {children}
      </ThemeAppContext.Provider>
  )
}

export default ThemeAppProvider