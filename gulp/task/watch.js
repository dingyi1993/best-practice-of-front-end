module.exports = function(gulp) {
    var jsCommon = config.src.path.js + '_common/**/*';

    gulp.task('watch', function() {
        gulp.watch(config.src.file.sass, ['sass']);
        gulp.watch(config.src.file.images, ['images']);
        gulp.watch([config.src.file.html, jsCommon], ['html:watch']);
        gulp.watch([config.src.file.js, '!' + jsCommon], ['js:watch']);
        gulp.watch(config.src.file.static, ['static:watch']);
    });
};
