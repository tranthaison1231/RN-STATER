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

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  largeTitle: 40,
  h1: 28,
  h2: 24,
  h4: 20,
  h5: 16,
  h6: 12,
  with: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}
