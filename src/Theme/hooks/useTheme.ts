import { useColorScheme } from 'react-native'
import { useSelector } from 'react-redux'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import Fonts from '@/Theme/Fonts'
import Gutters from '@/Theme/Gutters'
import Images from '@/Theme/Images'
import Layout from '@/Theme/Layout'
import Common from '@/Theme/Common'
import * as DefaultVariables from '@/Theme/Variables'
import themes from '@/Theme/themes'
import { ThemeState } from '@/Store/Theme'
import {
  Theme,
  ThemeCommon,
  ThemeNavigationColors,
  ThemeNavigationTheme,
  ThemeVariables,
} from '@/Theme/theme.type'

export default function useTheme() {
  const colorScheme = useColorScheme()

  // Get current theme from the store
  const currentTheme = useSelector(
    (state: { theme: ThemeState }) => state.theme.theme || 'default',
  )
  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  )
  const darkMode = isDark === null ? colorScheme === 'dark' : isDark
  //Select the right theme light theme ({} if not exist)
  const {
    Variables: themeConfigVars = {} as Partial<ThemeVariables>,
    ...themeConfig
  } = themes[currentTheme] || {}

  const {
    Variables: darkThemeConfigVars = {} as Partial<ThemeVariables>,
    ...darkThemeConfig
  } = darkMode ? themes[`${currentTheme}_dark`] || {} : {}

  const themeVariables: ThemeVariables = mergeVariables(
    DefaultVariables as ThemeVariables,
    themeConfigVars,
    darkThemeConfigVars,
  )

  // Build the default theme
  const baseTheme: Theme = {
    Fonts: Fonts(themeVariables),
    Gutters: Gutters(themeVariables),
    Images: Images(themeVariables),
    Layout: Layout(themeVariables),
    Common: Common({
      ...themeVariables,
      Layout: Layout(themeVariables),
      Gutters: Gutters(themeVariables),
      Fonts: Fonts(themeVariables),
      Images: Images(themeVariables),
    }) as ThemeCommon,
    ...themeVariables,
  }

  // Merge and return the current Theme
  return buildTheme(
    darkMode,
    baseTheme,
    formatTheme(themeVariables, themeConfig || {}),
    formatTheme(themeVariables, darkThemeConfig || {}),
  )
}

const formatTheme = (
  variables: ThemeVariables,
  theme: Partial<Theme>,
): Partial<Theme> => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: (generate as any)(variables),
    }
  }, {})
}

const mergeVariables = (
  variables: ThemeVariables,
  themeConfig: Partial<ThemeVariables>,
  darkThemeConfig: Partial<ThemeVariables>,
): ThemeVariables =>
  Object.entries(variables).reduce((acc, [group, vars]) => {
    return {
      ...acc,
      [group]: {
        ...vars,
        ...((themeConfig as any)[group] || {}),
        ...((darkThemeConfig as any)[group] || {}),
      },
    }
  }, {} as ThemeVariables)

const buildTheme = (
  darkMode: boolean,
  baseTheme: Theme,
  themeConfig: Partial<Theme>,
  darkThemeConfig: Partial<Theme>,
) => {
  return {
    ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
    darkMode,
    NavigationTheme: mergeNavigationTheme(
      darkMode ? DarkTheme : DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @param darkTheme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (
  baseTheme: Theme,
  theme: Partial<Theme>,
  darkTheme: Partial<Theme>,
): Theme =>
  Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...((theme as any)[key] || {}),
        ...((darkTheme as any)[key] || {}),
      },
    }),
    {} as Theme,
  )

const mergeNavigationTheme = (
  reactNavigationTheme: ThemeNavigationTheme,
  overrideColors: ThemeNavigationColors,
) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
})
