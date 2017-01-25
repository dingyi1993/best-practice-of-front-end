module.exports = function(gulp) {
    gulp.task('mock', function() {
        return gulp.src('.')
            .pipe(plugins.mockServer({
                port: require(config.envJson)('port').rd
            }));
    });
};
