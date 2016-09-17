const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.json'],
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
};
