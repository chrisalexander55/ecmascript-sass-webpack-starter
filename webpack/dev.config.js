const path = require('path');
const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

const env = require('../env');
const proxyRules = require('../src/app/modules/shared/proxy/config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(webpackCommon, {

  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dev/src'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/'
  },

  module: {

    rules: [
      {
        test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, 'postcss.config.js')
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
      },

      {
        test: /\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { 
            esModules: true,
            preserveComments: true
          }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      }
    ]

  },

  plugins: [

    new DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),
    // vendor module
    // new Webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   filename: "modules/vendor.js",
    //   minChunks: Infinity,
    // }),
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
    }),
    // ####### add chunks as script tags within respective HTML file ########
    // some-page-1.html
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../src/app/pages/some-page-1.html'),
        chunksSortMode: 'manual',
        chunks: ['common', 'some-page-1'],
        filename: "pages/some-page-1.html"
    }),
    // some-page-2.html
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../src/app/pages/some-page-2.html'),
        chunksSortMode: 'manual',
        chunks: ['common', 'some-page-2'],
        filename: "pages/some-page-2.html"
    }),
    // not-found.html
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../src/app/not-found.html'),
        chunksSortMode: 'manual',
        chunks: ['common', 'not-found'],
        filename: "not-found.html"
    }),
    // not-supported.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/not-supported.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'not-supported'],
      filename: "not-supported.html"
  }),
    // index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/index.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'index'],
      filename: "index.html"
    }),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '0.0.0.0',
      analyzerPort: 3001,
      reportFilename: 'bundle-report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: 'bundle-stats.json',
      statsOptions: null,
      logLevel: 'info'
    }),

  ],

  devServer: {
    host: env.devServer.host || 'localhost',
    port: env.devServer.port || 3000,
    contentBase: path.resolve(__dirname, '../dev/src'),
    watchContentBase: true,
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    watchOptions: {
      ignored: /node_modules/
    },
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: proxyRules
  }

});