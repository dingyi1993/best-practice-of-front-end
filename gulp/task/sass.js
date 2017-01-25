var rev = require('../util/rev');

module.exports = function(gulp) {
    gulp.task('sass', function() {
        return gulp.src(config.src.file.sass)

            .pipe(plugins.cached('sass'))

            .pipe(plugins.debug({title: '[sass]编译:'}))

            .pipe(plugins.sass())

            .on('error', plugins.notify.onError({
                title: 'compile error',
                message: '<%= error.message %>'
            }))

            .pipe(plugins.if(config.isProduction, plugins.cleanCss({debug: true}, function(details) {
                common.log('min css: ' + details.name + ': ' + details.stats.originalSize + ' => ' + details.stats.minifiedSize);
            })))

            .pipe(plugins.if(config.isProduction, rev(config.dist.path.css)(), gulp.dest(config.dist.path.css)))

            .pipe(common.reload({stream: true}));

    });
};
