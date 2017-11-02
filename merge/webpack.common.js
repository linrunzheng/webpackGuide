 var path = require('path');
 var HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: {
         app: './src/index.js'
     },
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist')
     },
     module: {
        rules:[
            {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                     loader: 'babel-loader'
                 }
            },
        ]           
     },
    plugins: [
         new HtmlWebpackPlugin({
             title: 'test'
         })
     ],
 }