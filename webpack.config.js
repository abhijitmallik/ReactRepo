
module.exports={
   entry: "./public/components/app.js",
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
