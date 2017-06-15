var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('uglifycss', function () {
  gulp.src('./client/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 0,
      "uglyComments": true
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist/'));
});
