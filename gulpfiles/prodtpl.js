var gulp = require('gulp');
 
var print = require('gulp-print');



gulp.task('prodtpl', function () {
	var target = gulp.src('./client/**/*.html');

	return target
	.pipe(gulp.dest('./dist'));
});
