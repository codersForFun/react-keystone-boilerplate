const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  resolve: {
    root: path.resolve(__dirname, '/src'),
    extensions: ['', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.woff\d?(\?.+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?.+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?.+)?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.svg(\?.+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.png$/,
        loader: 'url?limit=10000&mimetype=image/png',
      },
      {
        test: /\.gif$/,
        loader: 'url?limit=10000&mimetype=image/gif',
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist/js'),
    publicPath: '/js/',
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('../styles/style.css', {
      allChunks: true,
    }),
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions'],
    }),
  ],
};
