var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var angularFilesort = require('gulp-angular-filesort');
var print = require('gulp-print');

gulp.task('app', function() {
  return gulp.src(['./client/**/*.js', '!./client/**/*test.js'], {
		relative: true})
		.pipe(angularFilesort())
		.pipe(print())
	  .pipe(plumber())
		.pipe(concat('app.js', {newLine: ';'}))
		.pipe(ngAnnotate({add: true}))
	  .pipe(plumber.stop())
    .pipe(gulp.dest('dist/'));
});
