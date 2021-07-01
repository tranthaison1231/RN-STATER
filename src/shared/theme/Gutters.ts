import { StyleSheet } from 'react-native'
import { SIZES } from './Variables'

const Gutters = StyleSheet.create({
  mdPading: {
    padding: SIZES.md,
  },
  xsMarginTop: {
    marginTop: SIZES.xs,
  },
  xlMarginTop: {
    marginTop: SIZES.xl,
  },
  xxlMarginTop: {
    marginTop: SIZES.xxl,
  },
  xsMargin: {
    margin: SIZES.xs,
  },
  xsHMargin: {
    marginHorizontal: SIZES.xs,
  },
  xsVMargin: {
    marginVertical: SIZES.xs,
  },
  xlVMargin: {
    marginVertical: SIZES.xl,
  },
})

export default Gutters
