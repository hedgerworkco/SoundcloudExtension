var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var root = path.join(__dirname, '..');
var context = path.join(root, 'src');
var clientDir = path.join(context, 'client');

module.exports = {
  entry: {
    background: path.join(context, 'background.js'),
    client: path.join(context, 'client.js')
  },

  context: context,

  output: {
    path: path.join(root, 'build/js'),
    filename: '[name]-bundle.js'
  },

  module: {
    loaders: [
    { test: /\.jsx$|\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?stage=0&optional=runtime']
    },
    {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
      loader: 'file'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },

  plugins: [
    new ExtractTextPlugin('../css/[name]-bundle.css')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
