import { SCREENS } from '@/shared/navigators/root'
import Common from '@/shared/theme/Common'
import Fonts from '@/shared/theme/Fonts'
import Gutters from '@/shared/theme/Gutters'
import Layout from '@/shared/theme/Layout'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Keyboard, Text, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'

const SignUp = () => {
  const { colors } = useTheme()
  const { navigate } = useNavigation()

  const signUp = () => {
    Keyboard.dismiss()
  }

  const redirectToLogin = () => {
    navigate(SCREENS.LOGIN)
  }

  return (
    <View style={[Gutters.mdPading]}>
      <Text style={[Fonts.titleSmall, Gutters.xlVMargin]}>Sign Up</Text>
      <TextInput label="Name" style={[Gutters.xsVMargin]} mode="outlined" />
      <TextInput
        label="Email"
        style={[Gutters.xsVMargin]}
        mode="outlined"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        style={[Gutters.xsVMargin]}
        mode="outlined"
        secureTextEntry
      />
      <View style={[Layout.rowCenter, Layout.justifyEnd, Gutters.xsVMargin]}>
        <Text>Already have an account?</Text>
        <IconButton
          icon="arrow-right"
          color={colors.primary}
          onPress={redirectToLogin}
        />
      </View>
      <Button
        mode="contained"
        style={[Gutters.xsVMargin, Common.largeButton]}
        onPress={signUp}
      >
        SIGN UP
      </Button>
    </View>
  )
}

export default SignUp
