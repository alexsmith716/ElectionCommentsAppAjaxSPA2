
var path = require('path')

module.exports = {

  entry: {
    app: './theServer/views/webpackPugEntry.js'
  },

  module: {
    rules: [{
      test: /\.pug/,
      use: [
        {
          loader: 'file-loader?name=[path][name].html&context=./pug',
          options: {} 
        },
        {
          loader: 'pug-loader?pretty&exports=false'
        }
      ]
    }]
  },

  output: {
    filename: '[path][name].html',
    path: path.join(__dirname, 'appClient', 'views')
  }

}
