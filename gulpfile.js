/*
We keep things pretty simple here:
  - Require Gulp
  - Require Gulp Load Plugins and load all dependencies
  - Require gulp-sass, the greatest gift.
*/
var gulp = require('gulp'),
  $      = require('gulp-load-plugins')(),
  sass   = require('gulp-sass');
  concat = require('gulp-concat');
  cleanCSS = require('gulp-clean-css');
/* 
The main styles compliation function:
  1. Compile the SASS
  2. Minify it.
  3. Turn it into a single file.
  4. Drop it into the css dir.
*/
gulp.task('styles', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('css'))
});

/*
The main watch function:
  1. Look in the SASS dir for changes to .scss files.
  2. Run the 'styles' task on anything that changes.
*/

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', gulp.series('styles'));
});