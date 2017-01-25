var rev = require('../util/rev');

module.exports = function(gulp) {
    gulp.task('images', function() {
        return gulp.src(config.src.file.images, {base: config.src.root})

            .pipe(plugins.cached('images'))

            .pipe(plugins.debug({title: '[images]编译:'}))

            .pipe(plugins.if(config.isProduction, rev(config.dist.root)(), gulp.dest(config.dist.root)))

            .pipe(common.reload({stream: true}));

    });
};
