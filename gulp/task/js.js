module.exports = function(gulp, config, plugins) {
    gulp.task('js', function() {
        return gulp.src(config.src.file.js, {base: config.src.root})

            .pipe(plugins.eslint())

            .pipe(plugins.eslint.format())

            .pipe(gulp.dest(config.dist.root));

    });
};
