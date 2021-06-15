const presets = [
  'module:metro-react-native-babel-preset',
  [
    '@babel/preset-react',
    {
      runtime: 'automatic',
    },
  ],
]
const plugins = [
  [
    '@babel/plugin-transform-react-jsx',
    {
      runtime: 'automatic',
    },
  ],
]
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
