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
    "page/main/main":'./src/js/index.js',
    "page/car/car":"./src/js/car.js",
    "page/goods/goods":"./src/js/goods.js",
    "vendor":["jquery"]
  },
  output:{
    filename:"[name].[hash].js",
    path:path.resolve(__dirname,'dist')
  },
 
  devServer:{
         /*这里发现一个问题，在我自己的电脑正常，在公司电脑open打开的地址后面会带undefined，去掉undefined打开网址才正常*/
         open:true,  
         hot: true,
         port:8081,
         contentBase: path.join(__dirname, "dist"),
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
            	limit: 8000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 8000,
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
	      filename:"index.html",
	      chunks:["page/main/main","vendor","mainfest"]
	    }),
	    new htmlWebpackPlugin({
	      title:"购物车",
	      template:'./src/index.html',
	      filename:"car.html",
	      chunks:["page/car/car","vendor","mainfest"]
	    }),
	    new htmlWebpackPlugin({
	      title:"商品",
	      template:'./src/index.html',
	      filename:"goods.html",
	      chunks:["page/goods/goods","vendor","mainfest"]
	    }),

	    new CleanWebpackPlugin(['dist']),
	    extractSass,
	    new webpack.ProvidePlugin({
		     $:"jquery",
		     jQuery:"jquery"
	    }) ,
	    new webpack.optimize.CommonsChunkPlugin({
	    	name:["vendor","mainfest"]
	    })
  	]
}
