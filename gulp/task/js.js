module.exports = function(gulp, config, plugins) {
    gulp.task('js', function() {
        return gulp.src(config.src.file.js, {base: config.src.root})

            .pipe(plugins.eslint())

            .pipe(plugins.eslint.results(function(results){
                // Called once for all ESLint results.
                common.log('Total Results: ' + results.length);
                common.log('Total Warnings: ' + results.warningCount);
                common.log('Total Errors: ' + results.errorCount);
            }))

            .pipe(gulp.dest(config.dist.root));

    });
};
