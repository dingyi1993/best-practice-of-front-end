var config = require('./config');
var port = {
    fe: 2333,
    rd: 2334
};
var env = {
    dev: {
        fe: 'http://www.dev-fe.com:' + port.fe,
        rd: 'http://www.dev-rd.com:' + port.rd
    },
    prod: {
        fe: 'https://www.fe.com',
        rd: 'https://www.rd.com'
    }
};

module.exports = function(type) {
    if (type === 'port') {
        return port;
    }
    var result = env[config.env];

    result.env = config.env;

    return result;
};
