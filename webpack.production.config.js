var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './client'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: './[name]/bundle.js'
  },
  devtool: 'source-map',
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, 
      { test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, use: ['url-loader'] },
      { test: /\.json$/, use: ['json-loader'] }
    ]
  },
};
