module.exports = function(gulp) {
    gulp.task('static', function() {
        var jsFilter = plugins.filter([config.src.path.static + 'lib/**/*.js', '!**/*.min.js'], {restore: true});
        var cssFilter = plugins.filter(config.src.path.static + 'css/**/*.css', {restore: true});

        return gulp.src(config.src.file.static)

            .pipe(plugins.debug({title: '[static]移动:'}))

            .pipe(jsFilter)
            .pipe(plugins.if(config.isProduction, plugins.uglify({mangle: true})))
            .pipe(jsFilter.restore)

            .pipe(cssFilter)
            .pipe(plugins.if(config.isProduction, plugins.cleanCss({debug: true}, function(details) {
                common.log('min css: ' + details.name + ': ' + details.stats.originalSize + ' => ' + details.stats.minifiedSize);
            })))
            .pipe(cssFilter.restore)

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('static:watch', ['static'], common.reload);
};
