var rev = require('../util/rev');

module.exports = function(gulp) {
    var postCssPlugins = [
        // plugins.stylelint(),
        plugins.autoprefixer({browsers: ['last 9 versions'], cascade: false}),
        plugins.postcssPx2rem({remUnit: 75})
    ];
    // console.log(plugins);

    gulp.task('sass', function() {
        return gulp.src(config.src.file.sass)

            .pipe(plugins.cached('sass'))

            .pipe(plugins.debug({title: '[sass]编译:'}))

            // .pipe(plugins.stylelint({
            //     reporters: [
            //         {formatter: 'string', console: true}
            //     ],
            //     debug: true
            // }))

            .on('error', plugins.notify.onError({
                title: 'compile error',
                message: '<%= error.message %>'
            }))

            .pipe(plugins.sassLint())

            .pipe(plugins.sassLint.format())

            .pipe(plugins.sass())

            .pipe(plugins.postcss(postCssPlugins))

            .pipe(plugins.if(config.isProduction, plugins.cleanCss({debug: true}, function(details) {
                common.log('min css: ' + details.name + ': ' + details.stats.originalSize + ' => ' + details.stats.minifiedSize);
            })))

            .pipe(plugins.if(config.isProduction, rev(config.dist.path.css)(), gulp.dest(config.dist.path.css)))

            .pipe(common.reload({stream: true}));

    });
};
