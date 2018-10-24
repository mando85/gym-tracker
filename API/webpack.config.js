// API webpack.config.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: `${path.resolve(__dirname, 'src')}/app.js`,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-root-import',
                {
                  rootPathPrefix: '$',
                  rootPathSuffix: 'src'
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new NodemonPlugin()
  ]
};
