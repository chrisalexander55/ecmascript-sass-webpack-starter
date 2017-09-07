const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommon = require('./dev.common.config');

const env = require('../env');
const proxyRules = require('../src/app/modules/shared/proxy/config');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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
    // assert scss style rules
    new StyleLintPlugin({
        configFile: '.stylelintrc',
        context: 'src/app',
        files: '**/*.scss',
        failOnError: true,
        quiet: false,
        syntax: 'scss'
    }),

    // ####### add chunks as script tags within respective HTML file ########
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
    // not-found.html
    new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../src/app/not-found.html'),
        chunks: ['vendor', 'common', 'not-found'],
        filename: "not-found.html"
    }),
    // not-supported.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/not-supported.html'),
      chunks: ['vendor', 'common', 'not-supported'],
      filename: "not-supported.html"
  }),
    // index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/index.html'),
      chunks: ['vendor', 'common', 'index'],
      filename: "index.html"
    }),
    // copy needed assets only into dev/src
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/app/assets')
      },
      {
        from: path.resolve(__dirname, '../src/app/robots.txt')
      }
    ], {
      ignore: [
        'modules/',
        'sass/'
      ]
    }
  ),
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