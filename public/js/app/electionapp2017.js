
$(function() {

  $('nav .navbar-header .navbar-toggle').on('click', function(e) {

    if ($('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded') === 'true') {

      e.stopPropagation()

      $('nav .navbar-collapse .dropdown').addClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'true')
      $('nav .navbar-collapse').collapse('toggle')

    } else {

      $('nav .navbar-collapse .dropdown').removeClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'false')

    }
  })

  console.log('userAgent > isSafari: ', isSafari)
  console.log('navigator.appVersion: ', webkitVersion)
  console.log('interactiveFormValidationEnabled: ', interactiveFormValidationEnabled)

})
