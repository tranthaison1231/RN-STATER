import Layout from '@/shared/theme/Layout'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-paper'

export default function Loading() {
  return (
    <SafeAreaView style={[Layout.center, Layout.fullH]}>
      <Text> Loading... </Text>
    </SafeAreaView>
  )
}
