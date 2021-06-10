import { StyleSheet } from 'react-native'
import { Colors, FontSize } from './Variables'

const Fonts = StyleSheet.create({
  txtSmall: {
    fontSize: FontSize.small,
    color: Colors.text,
  },
  txtRegular: {
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  txtLarge: {
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
    color: Colors.text,
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
