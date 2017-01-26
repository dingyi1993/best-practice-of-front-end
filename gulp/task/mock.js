module.exports = function(gulp) {
    gulp.task('mock', function() {
        return gulp.src('.')
            .pipe(plugins.mockServer({
                host: plugins.ip.address(),
                port: require(config.envJson)('port').rd
            }));
    });
};
