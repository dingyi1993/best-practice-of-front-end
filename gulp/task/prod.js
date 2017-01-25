module.exports = function(gulp) {
    gulp.task('prod', function(callback) {
        plugins.runSequence('rebuild', 'rev', callback);
    });
};
