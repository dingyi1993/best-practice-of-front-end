var rev = require('../util/rev');

module.exports = function(gulp, config) {
    gulp.task('sass', function() {
        return gulp.src(config.src.file.sass)

            // .pipe(plugins.plumber({
            //     errorHandler: function(error) {
            //         common.error('sass：' + error);
            //     }
            // }))

            .pipe(plugins.debug({title: '编译:'}))

            .pipe(plugins.sass())

            .pipe(plugins.if(config.isProduction, plugins.cleanCss({debug: true}, function(details) {
                common.log('min css: ' + details.name + ': ' + details.stats.originalSize + ' => ' + details.stats.minifiedSize);
            })))

            .pipe(plugins.if(config.isProduction, rev(config.dist.path.css)(), gulp.dest(config.dist.path.css)))

            .pipe(common.reload({stream: true}));

    });
};
