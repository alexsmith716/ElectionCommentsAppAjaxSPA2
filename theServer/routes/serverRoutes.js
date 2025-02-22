
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var express = require('express')
var router = express.Router()
var serverControllers = require('../controller/serverMainCtrls')
var nocache = require('nocache')
var auth = require('../../shared/auth')
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.use(function (req, res, next) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> serverRoutes > router.use > req.method: ', req.method)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> serverRoutes > router.use > req.url: ', req.url)
  //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> serverRoutes > router.use > req.headers: ', req.headers)
  //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>> serverRoutes > router.use > req.body: ', req.body)
  next()
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/', serverControllers.getIndex)

router.get('/loginorsignup', serverControllers.getLoginOrSignup)
router.get('/dummypage', serverControllers.getDummyPage)
router.get('/resources', serverControllers.getResouces)
router.get('/about', serverControllers.getAbout)
router.get('/contact', serverControllers.getContact)
router.get('/team', serverControllers.getTeam)
router.get('/customerservice', serverControllers.getCustomerService)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/signup', csrfProtection, serverControllers.getSignup)
router.get('/login', csrfProtection, serverControllers.getLogin)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// router.get('/rendernotifyerror', serverControllers.renderNotifyError)
router.get('/notifyerror', serverControllers.getNotifyError)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/loginuserhome', auth.jwtAuthAPI, serverControllers.doLoginUserHome)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/membersonly', auth.ensureAuthenticated, serverControllers.getMembersOnly)
router.get('/accountsettings', csrfProtection, serverControllers.getUserProfile)
router.get('/logout', auth.ensureAuthenticated, serverControllers.getLogout)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// holding off on updating comments for next project version +++++++++++++++++++++++++++++++
router.get('/comments', csrfProtection, auth.ensureAuthenticated, serverControllers.getComments)
router.post('/comments/maincomment', csrfProtection, auth.ensureAuthenticated, serverControllers.postMainComment)
router.post('/comments/subcomment/:subcommentid', csrfProtection, auth.ensureAuthenticated, serverControllers.postSubComment)

module.exports = router
