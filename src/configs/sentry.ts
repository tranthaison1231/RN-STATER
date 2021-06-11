import * as Sentry from '@sentry/react-native'
import Config from 'react-native-config'

Sentry.init({
  dsn: Config.SENTRY_URL,
})
