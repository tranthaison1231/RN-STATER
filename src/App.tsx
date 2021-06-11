import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'
import './configs/translations'
import { ToastProvider } from '@/shared/components/Toast'
import ApplicationNavigator from './Navigators'

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <PaperProvider>
      <ToastProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
          </PersistGate>
        </Provider>
      </ToastProvider>
    </PaperProvider>
  </SafeAreaProvider>
)

export default App
