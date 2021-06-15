import 'react-native'
import 'isomorphic-fetch'
import renderer from 'react-test-renderer'
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js'
import App from '../src/App'

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo)
it('renders correctly', () => {
  global.fetch = require('node-fetch')
  renderer.create(<App />)
})
