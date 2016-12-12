var common = {};

common.log = function(content) {
    plugins.util.log(plugins.util.colors.green('[INFO]: ' + content));
}
common.warn = function(content) {
    plugins.util.log(plugins.util.colors.yellow('[WARN]: ' + content));
}
common.error = function(content) {
    plugins.util.log(plugins.util.colors.red('[ERROR]: ' + content));
}
common.reload = plugins.browserSync.reload;

module.exports = common;
