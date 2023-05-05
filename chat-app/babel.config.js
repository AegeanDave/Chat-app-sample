module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      require.resolve('expo-router/babel'),
      'module:react-native-dotenv',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: './components',
            context: './context',
            hook: './hook',
            models: './models',
            assets: './assets',
            constants: './constants'
          }
        }
      ]
    ]
  }
}
