import { navigationRef } from '@/shared/navigators/Root'
import Home from '@/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Layout from '@/shared/theme/Layout'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const darkMode = true
  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
