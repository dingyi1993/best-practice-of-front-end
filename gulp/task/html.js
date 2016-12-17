module.exports = function(gulp, config) {
    gulp.task('html', function() {
        return gulp.src(config.src.file.html)

            .pipe(plugins.debug({title: '编译:'}))

            .pipe(plugins.if(config.isProduction, plugins.htmlmin({removeComments: true, collapseWhitespace: true})))

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('html:watch', ['html'], common.reload);
};
