module.exports = function(gulp, config, plugins) {
    gulp.task('watch', function() {
        gulp.watch(config.src.file.sass, ['sass']);
        gulp.watch(config.src.file.html, ['html:watch']);
    });
};