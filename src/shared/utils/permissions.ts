import messaging from '@react-native-firebase/messaging'
import { Permission, Platform } from 'react-native'
import {
  check,
  checkNotifications,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions'

const optionLocation = Platform.select({
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
})

export const allowPermissionNotification = async ({
  onPress,
  onDismiss,
}: {
  onPress?: () => void
  onDismiss?: () => void
}): Promise<void> => {
  try {
    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission()
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
      if (enabled) {
        const isRegisteredForRemote =
          messaging().isDeviceRegisteredForRemoteMessages
        if (!isRegisteredForRemote) {
          await messaging().registerDeviceForRemoteMessages()
        }
        onDismiss?.()
      } else if (authStatus === messaging.AuthorizationStatus.DENIED) {
        onPress?.()
      }
    } else {
      const result = await checkNotifications()
      if (result?.status === RESULTS.GRANTED) {
        onDismiss?.()
      }
      if (result?.status !== RESULTS.GRANTED) {
        onPress?.()
      }
    }
  } catch (error) {
    onPress?.()
  }
}

export const allowPermissionLocation = async () => {
  try {
    const result = await check(optionLocation as Permission)
    switch (result) {
      case RESULTS.GRANTED:
        break
      case RESULTS.DENIED:
        break
      case RESULTS.BLOCKED:
        break
      case RESULTS.UNAVAILABLE:
        break
      default:
        break
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err)
  }
}
