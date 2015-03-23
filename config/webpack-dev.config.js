var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var root = path.join(__dirname, '..');
var context = path.join(root, 'src');

module.exports = {
  entry: {
    background: path.join(context, 'background.js'),
    client: path.join(context, 'client.jsx')
  },

  output: {
    path: path.join(root, 'build/js'),
    filename: '[name]-bundle.js'
  },

  module: {
    loaders: [
    {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
      loader: 'file'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader'].join('!'))
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: [path.join(root, 'node_modules'), path.join(context, 'node_modules')]
    }
    ]
  },

  plugins: [
    new ExtractTextPlugin('../css/[name]-bundle.css')
  ]
};
