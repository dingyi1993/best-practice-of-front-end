module.exports = function(gulp, config) {
    gulp.task('mock', function() {
        return gulp.src('.')
            .pipe(plugins.mockServer({
                port: 2334
            }));
    });
};
