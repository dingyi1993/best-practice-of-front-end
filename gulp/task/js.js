var fs = require('fs');
var rev = require('../util/rev');

module.exports = function(gulp) {
    gulp.task('js', function() {
        return gulp.src([config.src.file.js, '!' + config.src.path.js + '_common/**/*'], {base: config.src.root})

            // .pipe(plugins.changed(config.dist.root, {extension: '.js'}))
            // .pipe(plugins.changedInPlace({firstPass: true}))
            .pipe(plugins.cached('js'))

            .pipe(plugins.debug({title: '[js]编译:'}))

            .pipe(plugins.template(require(config.envJson)(), {interpolate: /\${([\s\S]+?)}/g}))

            .pipe(plugins.if(!config.isProduction, plugins.eslint()))

            .pipe(plugins.if(!config.isProduction, plugins.eslint.format()))

            .pipe(plugins.if(!config.isProduction, plugins.eslint.results(function(results) {
                if (!fs.exists(config.dist.root + 'log/')) {
                    fs.mkdir(config.dist.root + 'log/', function() {});
                }
                var data = '';

                for (var i = 0; i < results.length; i++) {
                    var result = results[i];

                    for (var j = 0; j < result.messages.length; j++) {
                        var message = result.messages[j];
                        var level = message.severity === 1 ? 'Warning' : (message.severity === 2 ? 'Error' : '');

                        data += result.filePath + ':' + message.line + ':' + message.column + ' ' + message.message + ' [' + level + '/' + message.ruleId + ']\n';
                    }
                }
                fs.writeFile(config.dist.root + 'log/eslint.log', data, {flag: 'w'}, function(err) {
                    if (err) {
                        throw err;
                    }
                });
            })))

            .pipe(plugins.if(config.isProduction, plugins.uglify({mangle: true})))

            .pipe(plugins.if(config.isProduction, rev(config.dist.root)(), gulp.dest(config.dist.root)));

    });
    gulp.task('js:watch', ['js'], common.reload);
};
