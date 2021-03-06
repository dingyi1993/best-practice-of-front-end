module.exports = function(gulp) {
    gulp.task('rev', ['rev:html', 'rev:css']);
    gulp.task('rev:html', function() {
        return gulp.src(config.dist.file.html)

            .pipe(plugins.debug({title: '[rev:html]编译:'}))

            .pipe(plugins.revReplace({manifest: gulp.src(config.rev.revJson)}))

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('rev:css', function() {
        return gulp.src(config.dist.file.css)

            .pipe(plugins.debug({title: '[rev:css]编译:'}))

            .pipe(plugins.revReplace({manifest: gulp.src(config.rev.revJson)}))

            .pipe(gulp.dest(config.dist.path.css));

    });
};
