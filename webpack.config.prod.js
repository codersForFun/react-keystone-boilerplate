const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const cssnano = require('cssnano');

module.exports = {
  devtool: 'hidden-source-map',

  entry: {
    app: [
      './client/index.js'
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[chunkhash].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modules: [
      'client',
      'node_modules'
    ]
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[hash:base64]&modules&importLoaders=1!postcss-loader')
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }, {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js'
    }),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new ManifestPlugin({
      basePath: '/'
    }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  postcss: () => [
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10']
    }),
    cssnano({
      autoprefixer: false
    }),
    postcssReporter({
      clearMessages: true
    })
  ]
};
