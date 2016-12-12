module.exports = function(gulp, config, plugins) {
    gulp.task('sass', function() {
        return gulp.src(config.src.file.sass)

            // .pipe(plugins.plumber({
            //     errorHandler: function(error) {
            //         common.error('sass：' + error);
            //     }
            // }))

            .pipe(plugins.sass())

            .pipe(plugins.if(config.isProduction, plugins.cleanCss({debug: true}, function(details) {
                common.log('min css: ' + details.name + ': ' + details.stats.originalSize + ' => ' + details.stats.minifiedSize);
            })))

            .pipe(gulp.dest(config.dist.path.css))

            .pipe(common.reload({stream: true}));

    });
};
