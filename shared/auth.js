
var ejwt = require('express-jwt')
var customErrorObject = require('./customErrorObject')
var newObjectErrorEnumerable = require('./newObjectErrorEnumerable')

var sendJSONresponse = function(res, status, content) {
  res.status(status)
  res.json(content)
}

// https://github.com/auth0/express-jwt
// https://github.com/auth0/node-jsonwebtoken
// https://github.com/request/request
// If the token is valid, req.user will be set with the JSON object decoded to be used by later middleware for authorization and access control

module.exports.jwtAuthAPI = function (req, res, next) {

  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> auth > jwtAuthAPI  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')

  ejwt({ secret: process.env.JWT_SECRET, userProperty: 'payload' })(req, res, next)

  /*
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    console.log(decoded.foo)
  })
  */
}


module.exports.ensureAuthenticated = function (req, res, next) {

  if (req.isAuthenticated()) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> ensureAuthenticated YES! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    return next()
  }
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> ensureAuthenticated NO! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  res.redirect('/loginorsignup')
}

module.exports.basicAuthAPI = function (req, res, next) {

  var hAuth = req.headers['authorization']
  var expr = /Basic/
  var err

  if (hAuth !== undefined && expr.test(hAuth)) {
    return next()
  }

  err = newObjectErrorEnumerable( new customErrorObject('Error', 'Unauthorized, missing Basic Auth headers', 401) )
  sendJSONresponse(res, 401, err)
}

module.exports.ensureAuthenticatedNewUserDataItem = function (req, res, next) {

  var u =  req.body.type.charAt(0).toUpperCase()+req.body.type.slice(1)
  var nd = new Date()

  if (req.body.type === 'email') {

    var dmillis = nd.getTime()
    dmillis = new Date(dmillis)
    var foo = 'foo'

    // if (foo === 'foo') {
    if (dmillis.getMinutes() > 4) {
    // if (dmillis.getMinutes() > 0) {

      sendJSONresponse(res, 201, { 'response': 'error', 'alertDanger': ' You\'re request to change the '+ u +' has timed out. Please try changing your '+ u +' again.' })

    } else {
      
      next()

    }

  } else if (req.body.type === 'password') {

    var pmillis = nd.getTime()
    pmillis = new Date(pmillis)

    // if (foo === 'foo') {
    if (pmillis.getMinutes() > 4) {
    // if (pmillis.getMinutes() > 0) {

      sendJSONresponse(res, 201, { 'response': 'error', 'alertDanger': ' You\'re request to change the '+ u +' has timed out. Please try changing your '+ u +' again.' })

    } else {

      next()

    }
  } else {

    err = customErrorObjectEnumerable( new customErrorObject('Unauthorized, bad credentials, userValidated timeStamp expired', 401) )
    next(err)

  }
}

module.exports.noCache = function (req, res, next) {
  res.header('Cache-Control', 'no-store, no-cache, private, must-revalidate, proxy-revalidate, max-stale=0, post-check=0, pre-check=0')
  //res.header('Expires', '-1')
  //res.header('Pragma', 'no-cache')
  next()
}
