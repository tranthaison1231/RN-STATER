import Amplify from 'aws-amplify'
import Config from 'react-native-config'

const AWS_CONFIG = {
  Auth: {
    identityPoolId: Config.AWS_COGNITO_IDENTITY_POOL_ID,
    userPoolId: Config.AWS_USER_POOL_ID,
    userPoolWebClientId: Config.AWS_USER_POOL_WEB_CLIENT_ID,
  },
  Analytics: {
    disabled: true,
  },
}

Amplify.configure(AWS_CONFIG)
