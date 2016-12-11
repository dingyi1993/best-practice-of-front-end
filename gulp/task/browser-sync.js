module.exports = function(gulp, config, plugins) {
    gulp.task('browser-sync', function() {
        return plugins.browserSync.init({
            server: {
                baseDir: config.dist.root
            },
            port: 2333,
            startPath: 'index.html'
        })
    });
};