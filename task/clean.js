module.exports = function(gulp, config, plugins) {
    gulp.task('clean', function(callback) {
        return plugins.del(config.dist.all, callback);
    });
};