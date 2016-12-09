module.exports = function(gulp, config, plugins) {
    gulp.task('html', function() {
        return gulp.src('src/*.html')
            .pipe(gulp.dest(config.dist.root));
    });
};