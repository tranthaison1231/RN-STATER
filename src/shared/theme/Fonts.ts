import { StyleSheet } from 'react-native'
import { SIZES, DEFAULT_THEME } from './Variables'

const Fonts = StyleSheet.create({
  txtSmall: {
    fontSize: SIZES.sm,
    color: DEFAULT_THEME.colors.text,
  },
  txtRegular: {
    fontSize: SIZES.md,
    color: DEFAULT_THEME.colors.text,
  },
  txtLarge: {
    fontSize: SIZES.xxl,
    color: DEFAULT_THEME.colors.text,
  },
  titleSmall: {
    fontSize: SIZES.sm * 2,
    fontWeight: 'bold',
    color: DEFAULT_THEME.colors.text,
  },
  titleRegular: {
    fontSize: SIZES.md * 2,
    fontWeight: 'bold',
    color: DEFAULT_THEME.colors.text,
  },
  titleLarge: {
    fontSize: SIZES.xxl * 2,
    fontWeight: 'bold',
    color: DEFAULT_THEME.colors.text,
  },
  txtCenter: {
    textAlign: 'center',
  },
  txtJustify: {
    textAlign: 'justify',
  },
  txtLeft: {
    textAlign: 'left',
  },
  txtRight: {
    textAlign: 'right',
  },
})

export default Fonts
