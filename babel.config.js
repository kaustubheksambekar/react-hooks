module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    'next/babel',
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@component': './src/components',
          '@views': './src/views',
          '@layouts': './src/layouts',
          '@mocks': './src/mocks',
          '@types': './src/types',
        },
      },
    ],
  ],
}