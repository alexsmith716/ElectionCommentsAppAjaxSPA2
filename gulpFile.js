
var gulp = require('gulp')
var pug = require('gulp-pug')
var watch = require('gulp-watch')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var pump = require('pump')
var fs = require('fs')

// var webpack = require('webpack')
// var webpackStream = require('webpack-stream')
// var webpackConfig = require('./webpack.config.js')

// var appClientFiles = fs.readdirSync('./appClient/js')

gulp.task('clean', function () {
  return del(['./appClientPublic'])
})

// errors are propagated forward through the piped streams
// source streams are closed & destroyed if a destination stream closed
// receive cause, file & line number of error

gulp.task('compress', function (cb) {
  pump([
      gulp.src('./appClient/js/**/*.js'),
      uglify({ compress : false }),
      concat('all.min.js'),
      gulp.dest('./appClientPublic/js')
    ],
    cb
  )
})

gulp.task('pug',function (cb) {
  pump([
      gulp.src('./appClient/viewTemplates/**/*.pug'),
      pug({
        doctype: 'html',
        pretty: false
      }),
      gulp.dest('./appClientPublic/views')
    ],
    cb
  )
})

gulp.task('watch', function () {
  //return watch('./appClient/viewTemplates/**/*.pug', { ignoreInitial: false })
  //.pipe(gulp.dest('pug'))
  gulp.watch('./appClient/js/**/*.js', ['compress'])
  gulp.watch('./appClient/viewTemplates/**/*.pug', ['pug'])
})

gulp.task('default', ['watch', 'compress', 'pug'])
