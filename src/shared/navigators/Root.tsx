/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationContainerRef } from '@react-navigation/native'
import { createRef } from 'react'

export const navigationRef = createRef<NavigationContainerRef>()

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params)
}

export function goBack() {
  navigationRef.current?.goBack()
}
