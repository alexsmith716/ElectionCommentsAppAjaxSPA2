
$(function() {

  //$('nav .navbar-collapse .dropdown').addClass('open')
  //$('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'true')

  $('nav .navbar-header .navbar-toggle').on('click', function(e) {

    //$('nav .navbar-header .navbar-toggle .navbar-collapse').addClass('in')
    //$('nav .navbar-header .navbar-toggle .navbar-collapse').attr('aria-expanded', 'true')
    // $('.navbar-toggle:visible').click()
    /*
    $('nav .nav .dropdown').addClass('open')
    $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'true')
    $('nav .navbar-header .navbar-toggle').navbar('toggle')
    $('nav .navbar-collapse .dropdown .dropdown-toggle').dropdown('toggle')
    */
    //$(this).addClass('inNNNNNNNNNNN')
    // $('nav .navbar-header .navbar-toggle .navbar-collapse').attr('aria-expanded', 'true')
    //$('nav .navbar-collapse .dropdown .dropdown-toggle').dropdown('toggle')
    //$('nav .navbar-header .navbar-toggle').collapse('toggle')

    if ($('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded') === 'true') {

      console.log('### navbar-toggle CLICK aria-expanded TRUE!!! ###')

      e.stopPropagation()

      // $(this).collapse('toggle')
      
      $('nav .navbar-collapse .dropdown').addClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'true')

      $('nav .navbar-collapse').collapse('toggle')

      /*$('nav .navbar-header .navbar-toggle .navbar-collapse').addClass('in')
      $('nav .navbar-header .navbar-toggle .navbar-collapse').attr('aria-expanded', 'true')

      $('nav .nav .dropdown').addClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'true')*/

      //$('nav .navbar-header .navbar-toggle').navbar('toggle')
      //$('nav .navbar-collapse .dropdown .dropdown-toggle').dropdown('toggle')
 
    } else {

      $('nav .navbar-collapse .dropdown').removeClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'false')

      console.log('### navbar-toggle CLICK aria-expanded FALSE ###')

    }
  })
  /*
  $('nav .navbar-header .navbar-toggle').on('click', function(e) {

    if ($('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded')) {

      console.log('### navbar-toggle CLICK aria-expanded TRUE!!! ###')

      $('nav .navbar-collapse .dropdown .dropdown-toggle').dropdown('toggle')
      $('nav .nav .dropdown').removeClass('open')
      $('nav .navbar-collapse .dropdown .dropdown-toggle').attr('aria-expanded', 'false')
      $('nav .navbar-header .navbar-toggle').off('click')
 
    } else {
      console.log('### navbar-toggle CLICK aria-expanded FALSE ###')
    }
  })

  $('nav .navbar-collapse .dropdown .dropdown-toggle').on('click', function() {

    if ($(this).attr('aria-expanded')) {
      // console.log('### dropdown-toggle aria-expanded TRUE ###')
    } else {
      // console.log('### dropdown-toggle aria-expanded FALSE ###')
    }
  })
  */

  /*
  // <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">

  $('nav .navbar-header .navbar-toggle').on('click', function() {

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
  */

})

function doSomethingNow(){
    console.log('>>>>>>>>>>>>>>>>>> function doSomethingNow')
}










