import { NavigationContainerRef } from '@react-navigation/native'
import { createRef } from 'react'

export const navigationRef = createRef<NavigationContainerRef>()

export function goBack() {
  navigationRef.current?.goBack()
}

export const SCREENS = {
  USERS: 'Users',
  FORGOT_PASSWORD: 'ForgotPassword',
  SIGN_UP: 'SignUp',
  LOGIN: 'Login',
}
