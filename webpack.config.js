
module.exports={
   entry: "./public/init.js",
   output:{
   	path : "./deploy",
   	filename : "app.js"
   },
   module:{
   	loaders:[
        {
               test:/\.js$/,exclude:/node_modules/,
               loader:'babel'
        },
        {
               test: /\.css$/, 
               loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
}
        }
   	]
   },
   watch : true
};
