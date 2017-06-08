var gulp = require('gulp'),
	watch = require('gulp-watch');

var browserSync = require("browser-sync").create();


gulp.task('watch-folder', function() {  
    browserSync.init({
        proxy: "http://localhost:8080"
    });
  gulp.watch('./client/**/*', ['inject']).on('change', browserSync.reload);;
});

