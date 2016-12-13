module.exports = function(gulp, config) {
    gulp.task('rebuild', function(callback) {
        plugins.runSequence('clean', 'build', callback);
    });
};
