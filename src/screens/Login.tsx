import { SCREENS } from '@/shared/navigators/root'
import Common from '@/shared/theme/Common'
import Fonts from '@/shared/theme/Fonts'
import Gutters from '@/shared/theme/Gutters'
import Layout from '@/shared/theme/Layout'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'

const Login = () => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()

  const redirectToForgotPassword = () => {
    navigate(SCREENS.FORGOT_PASSWORD)
  }

  return (
    <View style={[Gutters.mdPading]}>
      <Text style={[Fonts.titleSmall, Gutters.xlVMargin]}>Sign Up</Text>
      <TextInput
        label="Email"
        style={[Gutters.xsVMargin]}
        mode="outlined"
        keyboardType="email-address"
      />
      <TextInput label="Email" style={[Gutters.xsVMargin]} mode="outlined" />
      <View style={[Layout.rowCenter, Layout.justifyEnd, Gutters.xsVMargin]}>
        <Text>Forgot your password?</Text>
        <IconButton
          icon="arrow-right"
          color={colors.primary}
          onPress={redirectToForgotPassword}
        />
      </View>
      <Button mode="contained" style={[Gutters.xsVMargin, Common.largeButton]}>
        SIGN UP
      </Button>
    </View>
  )
}

export default Login
