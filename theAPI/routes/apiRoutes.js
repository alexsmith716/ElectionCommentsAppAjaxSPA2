
var express = require('express')
var router = express.Router()
var apiControllers = require('../controller/apiMainCtrls')
var cookieParser = require('cookie-parser')
var nocache = require('nocache')
var auth = require('../../shared/auth')
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.use(function (req, res, next) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> apiRoutes > router.use > req.method: ', req.method)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> apiRoutes > router.use > req.url: ', req.url)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> apiRoutes > router.use > req.headers: ', req.headers)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> apiRoutes > router.use > req.body: ', req.body)
  next()
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/loginview/init', apiControllers.ajaxLoginViewInit)
router.get('/indexview/init', apiControllers.ajaxIndexViewInit)
router.get('/userhomeview/init', apiControllers.ajaxUserHomeViewInit)
router.get('/resourcesview/init', apiControllers.ajaxResourcesViewInit)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.post('/logincredentials', csrfProtection, apiControllers.doLoginCredentials)
// router.get('/loginuser', csrfProtection, auth.jwtAuthAPI, apiControllers.doLoginUser)



router.post('/loginuserhome', auth.jwtAuthAPI, apiControllers.doLoginUserHome)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.post('/signupuser', csrfProtection, apiControllers.ajaxSignUpUser)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.post('/forgotpassword', csrfProtection, apiControllers.ajaxForgotPassword)
router.put('/userprofile', csrfProtection, auth.ensureAuthenticated, apiControllers.ajaxEvaluateUserProfile)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.post('/usersignup', csrfProtection, apiControllers.expectedResponseSignUp, apiControllers.ajaxEvaluateUserEmail)
router.post('/userprofile', csrfProtection, apiControllers.expectedResponseUserProfile, apiControllers.ajaxEvaluateUserEmail)

router.post('/validatenewuserdataservice', csrfProtection, auth.ensureAuthenticated, apiControllers.ajaxValidateNewUserDataService)

router.put('/newuserdatapathchange', csrfProtection, auth.ensureAuthenticated, auth.ensureAuthenticatedNewUserDataItem, apiControllers.ajaxNewUserDataItem)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/userprofile/:userid', csrfProtection, apiControllers.getUserProfileResponse)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/comments', csrfProtection, auth.basicAuthAPI, apiControllers.getCommentsResponse)
router.post('/comments/maincomment', csrfProtection, auth.basicAuthAPI, apiControllers.postMainCommentResponse)
router.post('/comments/subcomment/:subcommentid', csrfProtection, auth.basicAuthAPI, apiControllers.postSubCommentResponse)
router.get('/:commentid', csrfProtection, auth.basicAuthAPI, apiControllers.getOneCommentResponse)

module.exports = router
