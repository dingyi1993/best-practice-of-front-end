var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({pattern: ['*']});
var fs = require('fs');

global.plugins = plugins;

var config = require('./gulp/config');
var common = require('./gulp/util/common');

global.common = common;
global.config = config;

var taskPath = 'gulp/task/';

fs.readdirSync(taskPath).forEach(function(task) {
    require('./' + taskPath + task)(gulp);
});
