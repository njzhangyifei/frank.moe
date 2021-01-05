var webpack = require('webpack');
var path = require('path');
var HotMiddleWareConfig = 'webpack-hot-middleware/client?reload=true';

var publicPath = 'http://localhost:3000/';

module.exports = {
  mode: 'development',
  entry: [
    HotMiddleWareConfig,
    './client'
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: publicPath,
    filename: './[name]/bundle.js'
  },
  devtool: 'source-map',
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
