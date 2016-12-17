var config = require('../config');

module.exports = function(dist) {
    return plugins.lazypipe()
        .pipe(plugins.rev)
        .pipe(plugins.gulp.dest, dist)
        .pipe(plugins.rev.manifest, config.rev.revJson, {base: config.dist.root, merge: true})
        .pipe(plugins.gulp.dest, config.dist.root);
};
