
var path = require('path')

module.exports = {

  entry: {
    app: './theServer/views/webpackPugEntry.js'
  },

  module: {
    rules: [{
      test: /\.pug$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].html',
            context: './pug'
          } 
        },
        {
          loader: 'pug-html-loader',
          options: {
            pretty: true,
            exports: false
          }
        }
      ]
    }]
  },

  output: {
    filename: '[path][name].html',
    path: path.join(__dirname, 'appClient', 'views')
  }

}
