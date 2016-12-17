module.exports = function(gulp, config) {
    gulp.task('dev', function(callback) {
        plugins.runSequence('rebuild', ['browser-sync', 'watch'], callback);
    });
};
