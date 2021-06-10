import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import { ApplicationNavigator } from '@/Navigators'
import { Provider as PaperProvider } from 'react-native-paper'
import './Translations'

const App = () => (
  <PaperProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  </PaperProvider>
)

export default App
