/* global $ */
/* global isSafari */
/* global location */
var helper = {

  init: function () {

    console.log('>>>>> indexView loaded <<<<<<<')
    window.showLoading = function () {
        $('.modal-backdrop').show()
    }
    window.hideLoading = function () {
        $('.modal-backdrop').hide()
    }

    helper.initializeJqueryEvents()
  },

  initializeJqueryEvents: function (){

    helper.initializeIndexView()

  },

  initializeIndexView: function () {
    console.log('>>>>>> indexView > initializeIndexView <<<<<<')
    showLoading()

    $.ajax({
      rejectUnauthorized: false,
      url: 'http://localhost:3000/api/indexview/init',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      accepts: 'application/json',
      async: true,

      success: function (data, status, xhr) {
        if (data.response === 'success') {

          hideLoading()
          console.log('>>>>>> indexView > success <<<<<<: ', data.message)

        } else {

          hideLoading()
          console.log('>>>>>> indexView > error <<<<<<')
        }
      },

      error: function (xhr, status, error) {
        hideLoading()
        console.log('>>>>>> indexView > xhr error <<<<<<')
      }
    })
  },

  showLoading: function () {
    $('.modal-backdrop').show();
  },

  hideLoading: function () {
    $('.modal-backdrop').hide();
  },

}

$(function () {
    helper.init()
})
