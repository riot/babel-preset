module.exports = () => ({
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
        loose: true,
        targets: {
          'edge': 15
        }
      }
    ]
  ]
})