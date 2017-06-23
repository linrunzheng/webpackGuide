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
    path:path.resolve(__dirname,'dist'),
  },
 
  devServer:{
        open:true,  
         hot: true, // Tell the dev-server we're using HMR
         proxy: {
            '/api/': {
                target: 'http://baidu.com',
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
                            require('autoprefixer')({
                              browsers: ['last 10 versions']
                          })
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
        },
        {
　　　　　　test: /\.html$/,
　　　　　　use: ['html-withimg-loader']
　　　　},
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                 name: 'font/[name].[hash:7].[ext]'
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
