
module.exports={
   entry: "./public/init.js",
   output:{
   	path : "./deploy",
   	filename : "app.js"
   },
   module:{
   	loaders:[
        {test:/\.js$/,exclude:/node_modules/,loader:'babel'}
   	]
   },
   watch : true
};
