var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence').use(gulp);

var config = require('./config/gulp');
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: config.root
        },
        port: 2333,
        startPath: 'index.html'
    })
});
gulp.task('clean', function(callback) {
    del(config.root + '**/*', callback);
});
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest(config.root));
});
gulp.task('default', function(callback) {
    runSequence(['clean', 'html', 'browser-sync'], callback);
});