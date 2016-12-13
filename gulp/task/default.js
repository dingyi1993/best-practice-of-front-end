module.exports = function(gulp, config) {
    gulp.task('default', function(callback) {
        plugins.runSequence('rebuild', ['browser-sync', 'watch'], callback);
    });
};
