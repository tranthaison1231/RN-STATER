import Home from '@/screens/Home'
import { navigationRef } from '@/shared/navigators/Root'
import Layout from '@/shared/theme/Layout'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeContext } from './shared/theme/ThemeProvider'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const { isThemeDark, theme } = useContext(ThemeContext)
  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar barStyle={isThemeDark ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
