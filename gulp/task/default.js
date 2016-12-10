module.exports = function(gulp, config, plugins) {
    gulp.task('default', function(callback) {
        plugins.runSequence('rebuild', ['browser-sync', 'watch'], callback);
    });
};