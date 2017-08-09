
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = function() {

  passport.use('local', new LocalStrategy({ usernameField: 'email' },

    function (username, password, done) {

      User.findOne({ email: username }, function (err, user) {

        if (err) { 
          return done(err)
        } 

        if (!user) {
          return done(null, false, { message: 'No user has that username!' })
        }

        user.checkPassword(password, function (err, result) {

          if (err) {
            return done(err)
          }

          if (!result) {
            return done(null, false, { message: 'Invalid password.' })
          }

          done(null, user)

        })
      })
    }
  ))
}
