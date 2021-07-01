import Common from '@/shared/theme/Common'
import Fonts from '@/shared/theme/Fonts'
import Gutters from '@/shared/theme/Gutters'
import { Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const ForgotPassword = () => {
  return (
    <View style={[Gutters.mdPading]}>
      <Text style={[Fonts.titleSmall, Gutters.xlVMargin]}>Forgot password</Text>
      <Text style={[Gutters.xxlMarginTop]}>
        Please, enter your email address. You will receive a link to to create a
        new password via email.
      </Text>
      <TextInput
        label="Email"
        style={[Gutters.xsVMargin]}
        mode="outlined"
        keyboardType="email-address"
      />
      <Button mode="contained" style={[Gutters.xsVMargin, Common.largeButton]}>
        SEND
      </Button>
    </View>
  )
}

export default ForgotPassword
