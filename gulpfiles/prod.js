var gulp = require('gulp'),
 wiredep = require('wiredep').stream,
 inject = require('gulp-inject'),
 angularFilesort = require('gulp-angular-filesort'),
 watch = require('gulp-watch');
var print = require('gulp-print');
var removeFiles = require('gulp-remove-files');


gulp.task('prod', ['uglify', 'uglifycss','move-assets','prodtpl'], function () {

  // remove app.js
  gulp.src('./dist/app.js')
    .pipe(removeFiles());

  // inject app.min.js and app.css
	var target = gulp.src('./client/index.html');

	var sources = gulp.src(['./dist/app.min.js'],{
		relative: true})
		  .pipe(angularFilesort())
		.pipe(print());

	var injectStyles = gulp.src(['./dist/app.css'],
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
		             {ignorePath:"dist",
		              addRootSlash : false,}
	              ))
	  .pipe(inject(injectStyles,
		             {ignorePath:"dist",
		              addRootSlash : false,}
	              ))
	  .pipe(gulp.dest('./dist'));
});

gulp.task('move-assets',function () {
    //temporary solutions to mkdir for existing directory problem
    gulp.src('./dist/*')
        .pipe(removeFiles());

	gulp.src(['./client/assets/**/*'])
	.pipe(gulp.dest('./dist/assets/'));
})


gulp.task('test-minify', ['uglify', 'uglifycss'], function () {


  // inject app.min.js and app.css
	var target = gulp.src('./client/index.html');

	var sources = gulp.src(['./dist/app.js'],{
		relative: true})
		  .pipe(angularFilesort())
		.pipe(print());

	var injectStyles = gulp.src(['./dist/app.css'],
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
		             {ignorePath:"dist",
		              addRootSlash : false,}
	              ))
	  .pipe(inject(injectStyles,
		             {ignorePath:"dist",
		              addRootSlash : false,}
	              ))
	  .pipe(gulp.dest('./dist'));
});

