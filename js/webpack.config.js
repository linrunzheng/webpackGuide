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
  devServer:{
         proxy: {
            '123': {
                target: 'http://api.douban.com/v2/movie/top250',
                secure: false,
                changeOrigin: true
            }
        }
        
  },
  module:{
    rules:[
      /*{test: /\.scss$/,use:["style-loader","css-loader","sass-loader"]},
      {test: /\.css$/,use:["style-loader","css-loader"]}*/
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
                  // use style-loader in development 
                  fallback: "style-loader"
              })
          },
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env'],
                  plugins: ['transform-runtime']
                }
              }
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
