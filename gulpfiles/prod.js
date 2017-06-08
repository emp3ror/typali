var gulp = require('gulp'),
 wiredep = require('wiredep').stream,
 inject = require('gulp-inject'),
 angularFilesort = require('gulp-angular-filesort'),
 watch = require('gulp-watch');
var print = require('gulp-print');
var removeFiles = require('gulp-remove-files');


gulp.task('prod', ['uglify', 'uglifycss','move-assets'], function () {

  // remove app.js
  gulp.src('./public/app.js')
    .pipe(removeFiles());

  // inject app.min.js and app.css
	var target = gulp.src('./client/index.html');

	var sources = gulp.src(['./public/app.min.js'],{
		relative: true})
		  .pipe(angularFilesort())
		.pipe(print());

	var injectStyles = gulp.src(['./public/app.css'],
		                          { read: false,
		                            relative: true })
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
		             {ignorePath:"public",
		              addRootSlash : false,}
	              ))
	  .pipe(inject(injectStyles,
		             {ignorePath:"public",
		              addRootSlash : false,}
	              ))
	  .pipe(gulp.dest('./public'));
});

gulp.task('move-assets',function () {
    //temporary solutions to mkdir for existing directory problem
    gulp.src('./public/*')
        .pipe(removeFiles());

	gulp.src(['./client/assets/**/*'])
	.pipe(gulp.dest('./public/assets/'));
})


gulp.task('test-minify', ['uglify', 'uglifycss'], function () {


  // inject app.min.js and app.css
	var target = gulp.src('./client/index.html');

	var sources = gulp.src(['./public/app.js'],{
		relative: true})
		  .pipe(angularFilesort())
		.pipe(print());

	var injectStyles = gulp.src(['./public/app.css'],
		                          { read: false,
		                            relative: true })
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
		             {ignorePath:"public",
		              addRootSlash : false,}
	              ))
	  .pipe(inject(injectStyles,
		             {ignorePath:"public",
		              addRootSlash : false,}
	              ))
	  .pipe(gulp.dest('./public'));
});

