var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern: ['*']});

var fs = require('fs');
var os = require('os');
console.log(plugins, os.platform());

var config = require('./config');

var args = plugins.yargs.argv;
var isProduction = function() {
    return args.env === 'prod';
};

fs.readdirSync('task/').forEach(function(task) {
    require('./' + 'task' + '/' + task)(gulp, config, plugins);
});
