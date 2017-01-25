module.exports = function(gulp) {
    gulp.task('browser-sync', function() {
        return plugins.browserSync.init({
            server: {
                baseDir: config.dist.root
            },
            port: require(config.envJson)('port').fe,
            startPath: 'index.html',
            open: false
        });
    });
};
