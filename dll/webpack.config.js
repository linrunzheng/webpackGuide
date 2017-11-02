var path=require("path");
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var AutoDllPlugin = require('autodll-webpack-plugin');

var glob= require('glob');
var files = glob.sync('./src/*.html');
var entry={};


var plugins=[
     new CleanWebpackPlugin(['dist']),
     new webpack.optimize.UglifyJsPlugin(),

     new AutoDllPlugin({
       filename: '[name].[hash].js', 
       path: './page/',
       inject:true,
       entry: {
         vendor: [
           "vue","vuex","axios","jquery","vue-router","moment","lodash","vue-touch","vue-lazyload"
         ]
       },
       plugins: [
         new webpack.optimize.UglifyJsPlugin()
       ]
     })
]

files.forEach(function(item,i){
    var htmlName=item.slice(item.lastIndexOf("/")+1);
    var name=htmlName.split(".")[0];

    entry["page/"+name+"/"+name]='./src/js/'+name+'.js'
    plugins.push(
        new htmlWebpackPlugin({
            template:item,
            filename:htmlName,
            chunks:["page/"+name+"/"+name]
        })
    )
});



module.exports={
    entry:entry,
    output:{
        filename:"[name].[chunkhash].js",
        path:path.resolve(__dirname,'dist'),
  },
 

  module:{
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
  plugins:plugins
}
