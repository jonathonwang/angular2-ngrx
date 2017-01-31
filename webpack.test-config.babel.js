'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        loader: 'raw',
        test: /\.(css|html)$/
      },
      {
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ts-loader', 'angular2-template-loader'],
        test: /\.ts$/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('.', 'src')
  }
};
