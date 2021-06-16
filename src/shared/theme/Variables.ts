import { Dimensions, PlatformOSType } from 'react-native'
import { DefaultTheme, DarkTheme, configureFonts } from 'react-native-paper'
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native'
import { Fonts, Theme } from 'react-native-paper/lib/typescript/types'

const fontConfig: {
  [platform in PlatformOSType | 'default']?: Fonts
} = {
  ios: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: 'normal',
    },
  },
}

export const DEFAULT_THEME: Theme & NavigationTheme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
  fonts: configureFonts(fontConfig),
}

export const DARK_THEME: Theme & NavigationTheme = {
  ...DarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
  fonts: configureFonts(fontConfig),
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
