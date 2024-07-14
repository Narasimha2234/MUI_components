import React, { createContext, useContext, useMemo, useState } from 'react'
import { darkTheme, lightTheme } from './themes'
import { ThemeProvider } from '@mui/material/styles'

const themeContext=createContext()
export const useTheme=()=>useContext(themeContext)
const ThemeProviderComp = ({children}) => {
    const [theme ,setTheme]=useState("light")
    const themeMode=useMemo(()=>(
        {
            toggleTheme:()=>{
                setTheme((prevTheme)=>  prevTheme==="light"?"dark":"light")
               
            },
            mode:theme
        }
    ),[theme])
    const currentTheme=theme==="light"?lightTheme:darkTheme
  return (
   <themeContext.Provider value={themeMode}>
       <ThemeProvider theme={currentTheme}>
        {children}
       </ThemeProvider>
   </themeContext.Provider>
  )
}

export default ThemeProviderComp