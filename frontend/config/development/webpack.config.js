const path = require('path');
const webpack = require('webpack');
const glob = require("glob");

module.exports = {
  entry: glob.sync("./frontend/javascripts/*.js"),
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].js',  // このままならmain.jsが作成される
    publicPath: 'http://localhost:4000/',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  devServer: {
    contentBase: '../public/assets',
    port: 4000
  },
};
