var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loader: 'coffee-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname  + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
