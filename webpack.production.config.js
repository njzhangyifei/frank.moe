var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './client'
    ],
    output: {
        path: path.resolve('./dist'),
        filename: './[name]/bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
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
