import { navigationRef } from '@/shared/navigators/root'
import Layout from '@/shared/theme/Layout'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useContext, useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import ForgotPassword from './screens/ForgotPassword'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Users from './screens/Users'
import Intro from './shared/components/Intro'
import linking from './shared/navigators/linking'
import { ThemeContext } from './shared/theme/ThemeProvider'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const { isThemeDark, theme } = useContext(ThemeContext)
  const [isShowApp, setIsShowApp] = useState(false)

  const onDone = () => {
    setIsShowApp(true)
  }

  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer
        ref={navigationRef}
        linking={linking}
        theme={theme}
        onReady={() => RNBootSplash.hide()}
      >
        {(() => {
          if (!isShowApp) {
            return <Intro onDone={onDone} />
          }
          return (
            <>
              <StatusBar
                barStyle={isThemeDark ? 'light-content' : 'dark-content'}
              />
              <Stack.Navigator headerMode="none">
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
                <Stack.Screen name="Users" component={Users} />
              </Stack.Navigator>
            </>
          )
        })()}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
