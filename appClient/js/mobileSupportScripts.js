
$(function() {


  $('#openMenu').on('click', function() {
    $('header').addClass('menuOpen')
    $('.mobile header #navBackground').css('height', $('.mobile header.menuOpen').height())

    $('#closeMenu, main, footer').one('click', function() {
      $('header').removeClass('menuOpen')
      $('.mobile header #navBackground').css('height', 50)
      $('#closeMenu, main, footer').off('click')
    })
  })


  var doMediaQuery = function (query, cb) {
    var host = {}
    var res = window.matchMedia(query)

    cb.apply(host, [res.matches, res.media])

    res.addListener(function (changed) {
      cb.apply(host, [changed.matches, changed.media])
    })
  }


  doMediaQuery('all and (max-width: 768px)', function (match) {

    if(match && !$('body').hasClass('mobile')) {

      $('body').addClass('mobile')

      if ( $('.mobile header').hasClass('menuOpen') ) {

        $('.mobile header #navBackground').css('height', $('.mobile header.menuOpen').height())

      } else {

        $('.mobile header #navBackground').css('height', 50)

      }
      $('body').addClass('mobile')

    } else {

      $('body').removeClass('mobile')

      if ( $('header .contentWrapper').height() > 130) {
        $('header #navBackground').css('height', $('header .contentWrapper').height())
      }

      if ( $('header .contentWrapper').height() === 130) {
        $('header #navBackground').css('height', $('header .contentWrapper').height())
      }
    }
  })


  var controlNav = controlNavEventListener(function() {

    if ( $('body').hasClass('mobile') ) {

      if ( $('.mobile header').hasClass('menuOpen') ) {

        $('.mobile header #navBackground').css('height', $('.mobile header.menuOpen').height())

      } else {

        $('.mobile header #navBackground').css('height', 50)

      }

    } else {

      if ( $('header .contentWrapper').height() > 130) {
        $('header #navBackground').css('height', $('header .contentWrapper').height())
      }

      if ( $('header .contentWrapper').height() === 130) {
        $('header #navBackground').css('height', $('header .contentWrapper').height())
      }
    }
  }, 20)

  window.addEventListener('resize', controlNav)
})


function controlNavEventListener(func, wait, immediate) {

  var timeout

  return function() {

    var context = this, args = arguments

    var later = function() {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }

    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) {
      func.apply(context, args)
    }
  }

}
