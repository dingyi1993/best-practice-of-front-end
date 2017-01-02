var fs = require('fs');
var rev = require('../util/rev');
var replace = require('../util/replace');

module.exports = function(gulp, config) {
    gulp.task('js', function() {
        return gulp.src(config.src.file.js, {base: config.src.root})

            // .pipe(plugins.changed(config.dist.root, {extension: '.js'}))
            // .pipe(plugins.changedInPlace({firstPass: true}))
            .pipe(plugins.cached('js'))

            .pipe(plugins.debug({title: '编译:'}))

            .pipe(replace())

            .pipe(plugins.eslint())

            .pipe(plugins.eslint.format())

            .pipe(plugins.eslint.results(function(results) {
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
            }))

            .pipe(plugins.if(config.isProduction, plugins.uglify({mangle: true})))

            .pipe(plugins.if(config.isProduction, rev(config.dist.root)(), gulp.dest(config.dist.root)));

    });
    gulp.task('js:watch', ['js'], common.reload);
};
