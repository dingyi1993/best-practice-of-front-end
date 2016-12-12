var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern: ['*']});

global.plugins = plugins;

var fs = require('fs');
var os = require('os');
// console.log(plugins, os.platform());

var config = require('./gulp/config');
var common = require('./gulp/util/common');

global.common = common;

var taskPath = 'gulp/task/';

fs.readdirSync(taskPath).forEach(function(task) {
    require('./' + taskPath + task)(gulp, config, plugins);
});
