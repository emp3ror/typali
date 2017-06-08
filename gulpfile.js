/* jshint node: true */

'use strict';

var gulp = require('gulp');  
var wrench = require('wrench');

/*
  concatenate all *.js / *.coffee files in the 'gulp' folder
 */
wrench.readdirSyncRecursive('./gulpfiles').filter(function(file) {  
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulpfiles/' + file);
});

/*
  executed as default task, when no task is specified
 */
// gulp.task('default', ['html', 'lib', 'css', 'fonts', 'images', 'index', 'ts', 'tsTest', 'tsE2E']);
/*gulp.task('default', ['clean'], function () {
  gulp.start('build');
});*/