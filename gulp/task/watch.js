module.exports = function(gulp, config) {
    gulp.task('watch', function() {
        gulp.watch(config.src.file.sass, ['sass']);
        gulp.watch(config.src.file.html, ['html:watch']);
        gulp.watch(config.src.file.js, ['js:watch']);
    });
};
