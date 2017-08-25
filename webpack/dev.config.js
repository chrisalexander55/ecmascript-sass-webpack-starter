const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./common.config');

const env = require('../env');
const proxyRules = require('../src/app/xhr/config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(webpackCommon, {

  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, '../src/dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id]-chunk.js',
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
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]__[local]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          }
        ]
      }
    ]

  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/index.html'),
      favicon: path.resolve(__dirname, '../src/assets/platform/favicon.ico')
    }),
    new HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src/sass',
      files: '**/*.scss',
      failOnError: true,
      quiet: false,
      syntax: 'scss'
    }),
    new DashboardPlugin(),
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
    })
  ],

  devServer: {
    host: env.devServer.host || 'localhost',
    port: env.devServer.port || 3000,
    contentBase: path.resolve(__dirname, '../src'),
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
