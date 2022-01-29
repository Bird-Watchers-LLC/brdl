const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: { path: './build' },
  devServer: { static: { directory: '/home/kirk/scratch-project/client' } },
  plugins: new HtmlWebpackPlugin({ template: './index.html' }),
  module: {
    rules: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: { 
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
      }},
    {
      test: /\.s?css$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: ['file-loader'],
    }
  ]
  }
}