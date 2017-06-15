var gulp = require('gulp'),
	watch = require('gulp-watch');

var modRewrite  = require('connect-modrewrite');


var browserSync = require("browser-sync").create();


gulp.task('watch-folder', function() {  
    browserSync.init({
        server: {
            baseDir: ["./public","./client"],
            routes: {
            	"/bower_components": "bower_components"
            },
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
  gulp.watch('./client/**/*', ['inject']).on('change', browserSync.reload);;
});

