import { StyleSheet } from 'react-native'
import { SIZES, DEFAULT_THEME } from './Variables'

const Fonts = StyleSheet.create({
  txtSmall: {
    fontSize: SIZES.h5,
    color: DEFAULT_THEME.colors.text,
  },
  txtRegular: {
    fontSize: SIZES.h4,
    color: DEFAULT_THEME.colors.text,
  },
  txtLarge: {
    fontSize: SIZES.largeTitle,
    color: DEFAULT_THEME.colors.text,
  },
  titleSmall: {
    fontSize: SIZES.h5 * 2,
    fontWeight: 'bold',
    color: DEFAULT_THEME.colors.text,
  },
  titleRegular: {
    fontSize: SIZES.h4 * 2,
    fontWeight: 'bold',
    color: DEFAULT_THEME.colors.text,
  },
  titleLarge: {
    fontSize: SIZES.largeTitle * 2,
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
