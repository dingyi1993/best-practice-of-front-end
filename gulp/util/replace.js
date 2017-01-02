var config = require('../config');

module.exports = plugins.lazypipe()
    .pipe(plugins.replace, /\${.+?}/g, function(replacement) {
        var env = require(config.envJson);
        var key = replacement.match(/[a-zA-Z0-9]+/g);
        var value = '';

        if (key) {
            if (key[0] === 'env') {
                value = config.env;
            } else if (env[key[0]]) {
                value = env[key[0]][config.env].replace(/127\.0\.0\.1/, plugins.ip.address());
            } else {
                common.error('No key in config file: ' + key);
            }
        }
        return value;
    });
