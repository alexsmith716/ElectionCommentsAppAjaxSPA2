
/*
var gulp = require('gulp')
var gulpSass = require('gulp-sass')
var gulpHeader = require('gulp-header')
var gulpCleanCss = require('gulp-clean-css')
var gulpRename = require("gulp-rename")
var gulpUglify = require('gulp-uglify')
var browserSync = require('browser-sync').create()
*/

var gulp = require('gulp')
var pug = require('gulp-pug')
var watch = require('gulp-watch')

gulp.task('pug',function() {
  return gulp.src('./theServer/views/**/*.pug')
  .pipe(pug({
    doctype: 'html',
    pretty: false
  }))
  .pipe(gulp.dest('./appClient/views'));
})

gulp.task('watch', function () {
  return watch('./theServer/views/**/*.pug', { ignoreInitial: false })
  .pipe(gulp.dest('pug'));
})
