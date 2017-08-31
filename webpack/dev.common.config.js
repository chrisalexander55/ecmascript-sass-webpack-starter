const path = require('path');
const Webpack = require('webpack');

// webpack plugins
const NameAllModulesPlugin = require('name-all-modules-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {

  entry: {
    'vendor': './src/app/js/vendor.js',
    'index': './src/app/js/index/bootstrap.js',
    'pages/some-page-1': './src/app/js/some-page-1/bootstrap.js',
    'pages/some-page-2': './src/app/js/some-page-2/bootstrap.js'
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
      }

    ]

  },
  plugins: [
    new Webpack.NamedModulesPlugin(),
    new Webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
            return chunk.name;
        }
        return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
    }),
    // Put modules common to all modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      names: ["common", "vendor"]
    }),
    // Put common async (lazy) modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      async: "common-lazy-[hash].js", 
      children: true
    })
  ]

};
