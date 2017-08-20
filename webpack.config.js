
var path = require('path')

// entry: entry point for the bundle
// if entry passed an object, entry: {app: './app.js'}, the key is the chunk name
// hence the ability of multiple entry chunks / code splitting / multiple bundles
// entry: './webpackPugEntry.js',

var pugEntry = path.resolve(__dirname, 'webpackPugEntry.js')

module.exports = {

  entry: pugEntry,

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
            pretty: true,
            data: {} // set of data to pass to the pug render
          }
        }
      ]
    },
    {
      test: /\.js$/,
      use: [
        {
          loader: 'uglify-loader'
        }
      ]
    }]
  },

  output: {
    filename: '[name].html',
    path: path.resolve(__dirname, 'appClient')
  }
/*
module.exports = {

  entry: path.join(__dirname, 'webpackPugEntry.js'),

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
            pretty: true,
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
*/
}
