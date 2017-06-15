var gulp = require('gulp');
var uglify = require('gulp-uglify');
var bytediff = require('gulp-bytediff');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber')

gulp.task('uglify', ['app'], function() {
	return gulp.src('dist/app.js')
		.pipe(plumber())
		.pipe(bytediff.start())
		.pipe(uglify({mangle: true}))
		.pipe(bytediff.stop())
		.pipe(rename('app.min.js'))
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/'));
});
