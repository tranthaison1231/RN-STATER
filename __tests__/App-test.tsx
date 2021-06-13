import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js'
import App from '../src/App'

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo)

it('renders correctly', () => {
  renderer.create(<App />)
})
