var gulp = require('gulp'),
 wiredep = require('wiredep').stream,
 inject = require('gulp-inject'),
 angularFilesort = require('gulp-angular-filesort'),
 watch = require('gulp-watch');
var print = require('gulp-print');



gulp.task('inject', function () {
	var target = gulp.src('./client/index.html');

	var sources = gulp.src(['./client/**/*.js', '!./client/**/*test.js' ],{
		
		relative: false})
		.pipe(angularFilesort())
		.pipe(print());

	var injectStyles = gulp.src(['./client/**/*.css'], 
		{ read: false,
		relative: false })
		.pipe(print());

	var options = {
        directory:  './bower_components/',
        ignorePath: '../',
        devDependencies: true,
        relative: false
        };

	return target
	.pipe(wiredep(options))
	.pipe(inject(sources,
		{ignorePath:"client",
		addRootSlash : false,}
	))
	.pipe(inject(injectStyles,
		{ignorePath:"client",
		addRootSlash : false,}
	))
	.pipe(gulp.dest('./public'));
});
