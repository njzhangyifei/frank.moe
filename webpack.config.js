var webpack = require('webpack');
var path = require('path');
var HotMiddleWareConfig = 'webpack-hot-middleware/client?reload=true';

var publicPath = 'http://localhost:3000/';

module.exports = {
    entry: [
        HotMiddleWareConfig,
        './client'
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: publicPath,
        filename: './[name]/bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }, 
            { test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader'},
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
};
