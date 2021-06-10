const presets = ['module:metro-react-native-babel-preset']
const plugins = []
const env = {
  production: {
    plugins: ['react-native-paper/babel'],
  },
}

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      '@': './src',
    },
  },
])

module.exports = {
  presets,
  plugins,
  env,
}
