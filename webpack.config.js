
var path = require('path')
var fileLoader = require('file-loader')
var pugHtmlLoader = require('pug-html-loader')

module.exports = {

  entry: './app.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.pug$/, loaders: ['file-loader?name=[path][name].html', 'pug-html-loader?pretty&exports=false'] }
    ]
  }
}

// file-loader?name=[path][name].html&context=./pug
// You can put the requireAll call to a new entry file and ignore the js output of it 

// Next you need to require all your pug files in your entry file

// function requireAll (r) { r.keys().forEach(r); }
// requireAll(require.context('./', true, /\.pug$/))