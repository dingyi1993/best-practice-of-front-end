module.exports = function(gulp, config, plugins) {
    gulp.task('sass', function() {
        return gulp.src(config.src.sass)
            .pipe(plugins.sass())
            .pipe(plugins.cleanCss({debug: true}, function(details) {
                console.log(details.name + ': ' + details.stats.originalSize + ' => ' + details.stats.minifiedSize);
            }))
            .pipe(gulp.dest(config.dist.css));
    });
};