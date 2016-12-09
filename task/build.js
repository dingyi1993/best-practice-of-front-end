module.exports = function(gulp, config, plugins) {
    gulp.task('build', function(callback) {
        // var runSequence = plugins.runSequence.use(gulp);
        return plugins.runSequence('clean', 'sass', 'html', 'browser-sync', callback);
    });
};