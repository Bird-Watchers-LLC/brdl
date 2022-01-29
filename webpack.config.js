const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './client/index.js'),
  output:{
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html')})
  ],
  module: {
    rules: [
        {
        test: /\.?jsx?/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
             }
          }]
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ]
  },
  devServer: {
    static: {
            directory: path.resolve(__dirname, './build'),
            publicPath: path.resolve(__dirname, './build'),
          },
      },
  }


// devServer: {
//   static: {
//     directory: path.resolve(__dirname, './build'),
//     publicPath: path.resolve(__dirname, './build'),
//   },
//   proxy: { '/querydb': 'http://localhost:3000' },
// },

// devServer: {
//   proxy: {
//     '/*': {
//       target: 'http://localhost:3000'
//     }
//   }
// }