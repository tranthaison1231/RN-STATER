import { LinkingOptions } from '@react-navigation/native'

const linking: LinkingOptions = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: {
        path: 'home',
      },
      Users: {
        path: 'users/:id',
        parse: {
          id: id => `${id}`,
        },
      },
    },
  },
}

export default linking
