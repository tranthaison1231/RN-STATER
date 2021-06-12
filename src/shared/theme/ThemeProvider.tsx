import React, { createContext, ReactNode, useCallback, useMemo } from 'react'
import { DARK_THEME, DEFAULT_THEME } from './Variables'

export const ThemeContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
  theme: DEFAULT_THEME,
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isThemeDark, setIsThemeDark] = React.useState(false)

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(currentIsThemeDark => !currentIsThemeDark)
  }, [])

  const preferences = useMemo(
    () => ({
      toggleTheme,
      theme: isThemeDark ? DARK_THEME : DEFAULT_THEME,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  )
  return (
    <ThemeContext.Provider value={preferences}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
