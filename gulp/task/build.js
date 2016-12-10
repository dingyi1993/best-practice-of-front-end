module.exports = function(gulp, config, plugins) {
    gulp.task('build', function(callback) {
        plugins.runSequence(['sass', 'html'], callback);
    });
};