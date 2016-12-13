module.exports = function(gulp, config) {
    gulp.task('build', function(callback) {
        plugins.runSequence(['sass', 'html', 'js'], callback);
    });
};
