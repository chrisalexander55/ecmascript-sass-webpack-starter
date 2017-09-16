const path = require('path');
const Webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
          test: /\.js$/,
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
      // assert scss style rules
      new StyleLintPlugin({
        configFile: '.stylelintrc',
        context: 'src/app',
        files: '**/*.scss',
        failOnError: true,
        quiet: false,
        syntax: 'scss'
      }),
      new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        Button: "exports-loader?Button!bootstrap/js/dist/button",
        Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
        Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
        Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
        Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Util: "exports-loader?Util!bootstrap/js/dist/util",
      }),
      // copy needed assets only into dist/
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
    ]

}