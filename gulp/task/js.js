module.exports = function(gulp, config) {
    gulp.task('js', function() {
        return gulp.src(config.src.file.js, {base: config.src.root})

            .pipe(plugins.eslint())

            .pipe(plugins.eslint.format())

            .pipe(plugins.if(config.isProduction, plugins.uglify({mangle: true})))

            .pipe(gulp.dest(config.dist.root));

    });
};
