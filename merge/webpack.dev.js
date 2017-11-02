 var merge = require('webpack-merge');
 var common = require('./webpack.common.js');

 module.exports = merge(common, {
   module:{
      rules:[
        {
           test: /\.css$/,
            use:["style-loader","css-loader"]
        }
    ]      
  },
   devtool: 'inline-source-map',
   devServer:{
        open:true,  
        hot: true, 
        proxy: {
           '/api/': {
               target: 'http://baidu.com',
               secure: false,
               changeOrigin: true
           }
       }      
     },
 })