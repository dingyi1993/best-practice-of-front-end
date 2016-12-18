module.exports = function(gulp, config) {
    gulp.task('static', function() {
        return gulp.src(config.src.file.static)

            .pipe(plugins.debug({title: '移动:'}))

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('static:watch', ['static'], common.reload);
};
