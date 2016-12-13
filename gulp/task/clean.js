module.exports = function(gulp, config) {
    gulp.task('clean', function() {
        // common.log('开始清理dist目录...');
        return plugins.del(config.dist.root, function() {
            // common.log('完成清理');
        });
    });
};
