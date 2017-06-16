var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('github-cname', function () {
	var target = gulp.src('./client/CNAME');

	return target
	.pipe(gulp.dest('./dist'));
});


gulp.task('github',['prod','github-cname'],function () {
	var target = gulp.src('./dist/index.html');
	return target
		.pipe(rename("404.html"))
		.pipe(gulp.dest('./dist'))
})