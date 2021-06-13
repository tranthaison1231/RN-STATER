import { Dimensions } from 'react-native'
import { DefaultTheme, DarkTheme } from 'react-native-paper'
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native'
import { Theme } from 'react-native-paper/lib/typescript/types'

export const DEFAULT_THEME: Theme & NavigationTheme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
}

export const DARK_THEME: Theme & NavigationTheme = {
  ...DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
}

const { width, height } = Dimensions.get('window')

export const SIZES = {
  xs: 8,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
  with: width,
  height: height,
  wp: (percentage: number) => Math.round((percentage * width) / 100),
  hp: (percentage: number) => Math.round((percentage * height) / 100),
}
