import Layout from '@/shared/theme/Layout'
import React from 'react'
import { Linking, SafeAreaView, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function Users() {
  return (
    <SafeAreaView style={[Layout.fill]}>
      <TouchableOpacity style={[Layout.center]}>
        <Text> Users</Text>
      </TouchableOpacity>
      <Button onPress={() => Linking.openURL('myapp://home')}>Go Back</Button>
    </SafeAreaView>
  )
}
