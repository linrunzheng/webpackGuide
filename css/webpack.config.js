var path=require("path");
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports={
  entry:{
    main:'./src/index.js'
  },
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
     
      {
        test: /\.s?css$/,
              use: extractSass.extract({

                  use: [
                  {
                      loader: "css-loader"
                  }, 
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins:  [     
                        require('autoprefixer')
                      ]
                    }
                  },
                  {
                      loader: "sass-loader"
                  }],
                  fallback: "style-loader"
              })
          }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      title:"首页",
      template:'./src/index.html',
      filename:"index.html"
    }),
    new CleanWebpackPlugin(['dist']),
    extractSass,
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery"
    })    
  ]
}
