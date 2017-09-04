const path = require('path');
const Webpack = require('webpack');

// webpack plugins
const NameAllModulesPlugin = require('name-all-modules-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

  entry: {
    'vendor': './src/app/js/vendor.js',
    'index': './src/app/js/index/bootstrap.js',
    'not-found': './src/app/js/not-found/bootstrap.js',
    'not-supported': './src/app/js/not-supported/bootstrap.js',
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
        enforce: "pre",
        test: /src\/app\/\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          outputReport: {
            filePath: '../../es-style/es-style-errors.xml'
          }
        }
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
    
    new Webpack.NamedModulesPlugin(),
    new Webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
            return chunk.name;
        }
        return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
    }),
    // vendor module
    new Webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "js/vendor-[chunkhash].min.js",
      minChunks: Infinity,
    }),
    // Put modules common to all modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: 'js/common-[chunkhash].min.js',
      minChunks: 3
    }),
    // Put common async (lazy) modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      async: "js/common-lazy-[chunkhash].min.js", 
      children: true
    })

  ]

};
