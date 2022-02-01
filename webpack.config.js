const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html'), filename: 'index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.?jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test:  /\.png/,
      //   type: 'asset/resource'
      // }
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        // include: path.resolve(__dirname, './assets/img'),
        // type: 'asset/resource',

        loader: 'file-loader',

        //   options: {
        //     publicPath: path.resolve(__dirname, './build'),
        //   },
        // },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './build'),
      publicPath: path.resolve(__dirname, './build'),
    },
  },
};
