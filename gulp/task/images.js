module.exports = function(gulp, config) {
    gulp.task('images', function() {
        return gulp.src(config.src.file.images, {base: config.src.root})

            .pipe(plugins.cached('images'))

            .pipe(plugins.debug({title: '编译:'}))

            .pipe(gulp.dest(config.dist.root))

            .pipe(common.reload({stream: true}));

    });
};
