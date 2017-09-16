const path = require('path');
const webpackMerge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const webpackCommon = require('./prod.common.config');

// webpack plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const StyleLoader = require('style-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const MINIFY_OPTS =  {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true
}

module.exports = webpackMerge(webpackCommon, {

  bail: true,
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'modules/[name]-[chunkhash].min.js',
    sourceMapFilename: 'modules/[name]-[chunkhash].map'
    // publicPath: '/dist/'
  },

  module: {

    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                minimize: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]'
              }
            },
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     config: {
            //       path: path.resolve(__dirname, 'postcss.config.js')
            //     },
            //     sourceMap: true,
            //     plugins: function () {
            //       return [
            //         require('precss'),
            //         require('autoprefixer')
            //       ];
            //     }
            //   }
            // },
            {
              loader: 'sass-loader',
              options: {
                // ident: 'postcss-ident',
                includePaths: [
                  path.resolve(__dirname, '../src/app')
                ],
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ]
        })
      }
    ]

  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
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
    // write out all css files
    new ExtractTextPlugin({
      filename: 'css/[name]-[chunkhash].min.css',
      // publicPath: "../dist/",
      allChunks: true
    }),
    // clean-out build destination dist/
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      exclude: '.gitignore'
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
    // ####### add chunks as script tags within respective HTML file ########
    // some-page-1.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/pages/some-page-1.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'some-page-1'],
      minify: MINIFY_OPTS,
      filename: "pages/some-page-1.html"
    }),
    // some-page-2.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/pages/some-page-2.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'some-page-2'],
      minify: MINIFY_OPTS,
      filename: "pages/some-page-2.html"
    }),
    // index.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/index.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'index'],
      minify: MINIFY_OPTS,
      filename: "index.html"
    }),
    // not-found.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/not-found.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'not-found'],
      minify: MINIFY_OPTS,
      filename: "not-found.html"
    }),
    // not-supported.html
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/app/not-supported.html'),
      chunksSortMode: 'manual',
      chunks: ['common', 'not-supported'],
      minify: MINIFY_OPTS,
      filename: "not-supported.html"
    }),
    new UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true
    }),
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
  ]

});
