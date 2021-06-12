import { StyleSheet } from 'react-native'
import { DEFAULT_THEME } from './Variables'

const Common = StyleSheet.create({
  bgPrimary: {
    backgroundColor: DEFAULT_THEME.colors.primary,
  },
  bgBlack: {
    backgroundColor: '#000',
  },
  bgReset: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
})

export default Common
