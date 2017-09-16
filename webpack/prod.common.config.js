const path = require('path');
const Webpack = require('webpack');

// webpack plugins
const NameAllModulesPlugin = require('name-all-modules-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

  entry: {
    // 'vendor': './src/app/modules/vendor.js',
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
        options: {
          babelrc: '../'
        }
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
    
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']

      // In case you imported plugins individually, you must also require them here:
      // Util: "exports-loader?Util!bootstrap/js/dist/util",
      // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    }),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
            return chunk.name;
        }
        return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
    }),
    // vendor module
    // new Webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   filename: "modules/vendor-[chunkhash].min.js",
    //   minChunks: Infinity,
    // }),
    // Put modules common to all modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: 'modules/common-[chunkhash].min.js',
      minChunks: 3
    }),
    // Put common async (lazy) modules into a separate chunk!
    new Webpack.optimize.CommonsChunkPlugin({
      async: "modules/common-lazy-[chunkhash].min.js", 
      children: true
    })

  ]

};
