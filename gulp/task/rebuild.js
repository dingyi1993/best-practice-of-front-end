module.exports = function(gulp) {
    gulp.task('rebuild', function(callback) {
        plugins.runSequence('clean', 'build', callback);
    });
};
