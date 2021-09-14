import { createContext, useState } from "react"

const isDark = false;
export const ThemeContext = createContext(isDark)


const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(isDark);

  const toggletheme = () => {
    setTheme(!isDark)
  }
  return (
    <ThemeContext.Provider value = {{theme,toggletheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
