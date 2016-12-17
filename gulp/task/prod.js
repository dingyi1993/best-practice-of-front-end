module.exports = function(gulp, config) {
    gulp.task('prod', function(callback) {
        plugins.runSequence('rebuild', 'rev', callback);
    });
};
