module.exports = function(gulp, config) {
    gulp.task('mock', function() {
        return gulp.src('.')
            .pipe(plugins.mockServer({
                host: plugins.ip.address(),
                port: 2334
            }));
    });
};
