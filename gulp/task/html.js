module.exports = function(gulp) {
    gulp.task('html', function() {
        return gulp.src([config.src.file.html, '!' + config.src.path.html + '_common/**'])

            .pipe(plugins.debug({title: '[html]编译:'}))

            .pipe(plugins.ejs({env: config.env}))

            .pipe(plugins.inlineSource())

            .pipe(plugins.template(require(config.envJson)(), {interpolate: /\${([\s\S]+?)}/g}))

            .pipe(plugins.if(config.isProduction, plugins.htmlmin({removeComments: true, collapseWhitespace: true})))

            .pipe(gulp.dest(config.dist.root));

    });
    gulp.task('html:watch', ['html'], common.reload);
};
