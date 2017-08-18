
var path = require('path')

// entry: entry point for the bundle
// if entry passed an object, entry: {app: './app.js'}, the key is the chunk name
// hence the ability of multiple entry chunks / code splitting / multiple bundles

module.exports = {

  entry: './webpackPugEntry.js',

  module: {
    rules: [{
      test: /\.pug$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].html',
            context: './pug'
          } 
        },
        {
          loader: 'pug-html-loader',
          options: {
            // options to pass to the compiler same as: https://pugjs.org/api/reference.html
            data: {} // set of data to pass to the pug render
          }
        }
      ]
    }]
  },

  output: {
    filename: '[name].html',
    path: path.join(__dirname, 'appClient', 'views')
  }

}
