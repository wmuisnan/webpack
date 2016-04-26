// module.exports = {
//   entry: './main.js',
//   output: {
//     filename: 'bundle.js'       
//   }
// }

var path = require('path');
module.exports = {
  entry: './es6/main.js',
  output: {
    path: path.join(__dirname, 'dist') ,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
      	test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
};