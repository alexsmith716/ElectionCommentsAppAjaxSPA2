var passport = require('passport')
var mongoose = require('mongoose')
var User = mongoose.model('User')

var sendJSONresponse = function (res, status, content) {
  res.status(status)
  res.json(content)
}