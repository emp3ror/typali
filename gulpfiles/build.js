var gulp = require('gulp'),
	watch = require('gulp-watch');

var source = './client';
gulp.task('build',function () {
  return gulp.src(source+'/**/*.*', { base: source+'/' })
    .pipe(gulp.dest('public'));
});