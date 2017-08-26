const Webpack = require('webpack');

// webpack plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

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
    // Put modules common to all modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      names: ["common", "vendor"]
      // minChunks: 2,
      // filename: "common-[id]-[hash]"
    }),
    // Put common async (lazy) modules into a separate chunk!
    new CommonsChunkPlugin({
      async: "common-lazy-[id]-[hash].js", 
      children: true
    })
    // minify
    // new UglifyJsPlugin()

  ]

};
