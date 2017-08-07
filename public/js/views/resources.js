/* global $ */
/* global isSafari */
/* global location */
var helper = {

  init: function () {

    console.log('>>>>> resources loaded <<<<<<<')
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
    console.log('>>>>>> resources > initializeResourcesView <<<<<<')
    showLoading()

    $.ajax({
      rejectUnauthorized: false,
      url: 'http://127.0.0.1:3000/api/resourcesview/init',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      accepts: 'application/json',
      async: true,

      success: function (data, status, xhr) {
        if (data.response === 'success') {

          hideLoading()
          console.log('>>>>>> resources > success <<<<<<: ', data.message)

        } else {

          hideLoading()
          console.log('>>>>>> resources > error <<<<<<')
        }
      },

      error: function (xhr, status, error) {
        hideLoading()
        console.log('>>>>>> resources > xhr error <<<<<<')
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
