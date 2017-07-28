
$(function() {

  // <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">

  $('nav .navbar-header .navbar-toggle').on('click', function() {
    console.log('##### 22222 #####')

    if ($('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded')) {

      // console.log('### navbar-toggle CLICK aria-expanded TRUE ###')

      $('nav .navbar-collapse .dropdown .dropdown-toggle').dropdown('toggle')
      $('nav .nav .dropdown').removeClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'false')

    } else {
      // console.log('### navbar-toggle CLICK aria-expanded FALSE ###')
    }
  })

  $('nav .navbar-collapse .dropdown .dropdown-toggle').on('click', function() {

    if ($(this).attr('aria-expanded')) {
      // console.log('### dropdown-toggle aria-expanded TRUE ###')
    } else {
      // console.log('### dropdown-toggle aria-expanded FALSE ###')
    }
  })

})