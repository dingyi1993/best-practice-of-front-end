var config = require('./config');
var port = {
    fe: 2333,
    rd: 2334
};
var env = {
    dev: {
        fe: 'http://127.0.0.1:' + port.fe,
        rd: 'http://127.0.0.1:' + port.rd
    },
    prod: {
        fe: 'https://www.fe.com',
        rd: 'https://www.rd.com'
    }
};

for (var url in env.dev) {
    env.dev[url] = env.dev[url].replace(/127\.0\.0\.1/, plugins.ip.address());
}

module.exports = function(type) {
    if (type === 'port') {
        return port;
    }
    var result = env[config.env];

    result.env = config.env;

    return result;
};
