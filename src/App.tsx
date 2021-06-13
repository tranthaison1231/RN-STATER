import { ToastProvider } from '@/shared/components/Toast'
import { persistor, store } from '@/store'
import React, { useContext } from 'react'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import './configs/translations'
import './configs/aws'
import ApplicationNavigator from './Navigators'
import ThemeProvider, { ThemeContext } from './shared/theme/ThemeProvider'

const Main = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider
          initialMetrics={initialWindowMetrics}
          style={{ backgroundColor: theme.colors.background }}
        >
          <PaperProvider theme={theme}>
            <ToastProvider>
              <ApplicationNavigator />
            </ToastProvider>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
)

export default App
