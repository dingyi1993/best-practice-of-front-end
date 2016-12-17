module.exports = function(gulp, config) {
    gulp.task('rev', function() {
        return gulp.src([config.rev.revJson, config.dist.file.html])

            .pipe(plugins.revCollector({replaceReved: true}))

            .pipe(gulp.dest(config.dist.root));

    });
};
