var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 2333,
        startPath: 'dist/index.html'
    })
});
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});
gulp.task('default', ['html', 'browser-sync'], function() {

});