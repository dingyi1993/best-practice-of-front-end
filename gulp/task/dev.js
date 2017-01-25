module.exports = function(gulp) {
    gulp.task('dev', function(callback) {
        plugins.runSequence('rebuild', ['browser-sync', 'mock', 'watch'], callback);
    });
};
