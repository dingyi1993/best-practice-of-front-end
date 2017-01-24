var replace = require('../util/replace');

module.exports = function(gulp, config) {
    gulp.task('html', function() {
        return gulp.src([config.src.file.html, '!' + config.src.path.html + '_common/**'])

            .pipe(plugins.debug({title: '编译:'}))

            .pipe(plugins.ejs({env: config.env}))

            .pipe(plugins.inlineSource())

            .pipe(replace())

            .pipe(plugins.if(config.isProduction, plugins.htmlmin({removeComments: true, collapseWhitespace: true})))

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('html:watch', ['html'], common.reload);
};
