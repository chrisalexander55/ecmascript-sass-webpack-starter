const Webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

  entry: {
    'vendor': './src/app/modules/vendor.js',
    'index': './src/app/modules/index/bootstrap.js',
    'not-found': './src/app/modules/not-found/bootstrap.js',
    'not-supported': './src/app/modules/not-supported/bootstrap.js',
    'some-page-1': './src/app/modules/some-page-1/bootstrap.js',
    'some-page-2': './src/app/modules/some-page-2/bootstrap.js'
  },

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules']
  },

  module: {

    rules: [

      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },

      {
        test: /\.json$/,
        loader: 'json'
      },

      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file',
      }

    ]

  },

  plugins: [
    // vendor module
    new Webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "modules/vendor.js",
        minChunks: Infinity,
    }),
    // Put modules common to all modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
    name: "common",
        filename: 'modules/common.js',
        minChunks: 3
    }),
    // Put common async (lazy) modules into a separate chunk!
        new Webpack.optimize.CommonsChunkPlugin({
        async: "modules/common-lazy.js", 
        children: true
    })
  ]

};