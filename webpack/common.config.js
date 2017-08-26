// webpack plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

  entry: {
    'vendor': './src/app/js/vendor.js',
    'welcome': './src/app/js/welcome/bootstrap.js',
    'some-page-1': './src/app/js/some-page-1/bootstrap.js',
    'some-page-2': './src/app/js/some-page-2/bootstrap.js'
  },

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\.json$/,
        loader: 'json'
      },

      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000'
      }

    ]

  },
  plugins: [
    new CommonsChunkPlugin({
      name: [
        'vendor',
        'welcome',
        'some-page-1', 
        'some-page-2'
      ],
      minChunks: Infinity
    })
  ]

};
