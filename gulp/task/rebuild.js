module.exports = function(gulp, config, plugins) {
    gulp.task('rebuild', function(callback) {
        plugins.runSequence('clean', 'build', callback);
    });
};
