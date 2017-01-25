module.exports = function(gulp) {
    gulp.task('build', function(callback) {
        plugins.runSequence(['sass', 'html', 'js', 'images', 'static'], callback);
    });
};
