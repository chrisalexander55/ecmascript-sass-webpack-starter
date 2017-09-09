const path = require('path');

module.exports = (config) => {
  config.set({
    files: [
      'src/test/index.js'
    ],
    preprocessors: {
      'src/test/index.js': 'webpack'
    },
    webpack: {
        module: {
          rules: [
              {
              test: /\.js$/,
              use: { loader: 'istanbul-instrumenter-loader' },
              include: path.resolve(__dirname, 'src/test/')
              }
          ]
        }
    },
    reporters: [
      'progress', 
      'coverage-istanbul'
    ],
    coverageIstanbulReporter: {
      reports: [
        'text-summary'
      ],
      fixWebpackSourcePaths: true
    }
  })
}