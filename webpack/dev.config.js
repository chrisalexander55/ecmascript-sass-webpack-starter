const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./dev.common.config');

const env = require('../env');
const proxyRules = require('../src/app/js/shared/proxy/config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(webpackCommon, {

  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../src/app'),
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

    // ####### add specific entry chunks as script tags within respective HTML file ########
    // some-page-1.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/pages/some-page-1.html'),
      chunks: ['vendor', 'common', 'some-page-1'],
      filename: "pages/some-page-1.html"
    }),
    // some-page-2.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/pages/some-page-2.html'),
      chunks: ['vendor', 'common', 'some-page-2'],
      filename: "pages/some-page-2.html"
    }),
    // index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/index.html'),
      chunks: ['vendor', 'common', 'index'],
      filename: "index.html"
    }),
    // ###############################

    new HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
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
    contentBase: [ path.resolve(__dirname, '../src') ],
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
