var merge = require('webpack-merge');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var common = require('./webpack.common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var cleanPlugin = require("clean-webpack-plugin");
var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});

module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.css$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, ],
                fallback: "style-loader"
            })
        }]

    },
    devtool: 'source-map',
    plugins: [
        new cleanPlugin(["dist"]),
        new UglifyJSPlugin(),
        extractSass,
    ]
});