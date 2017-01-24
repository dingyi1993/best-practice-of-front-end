var srcRoot = 'src/';
var distRoot = 'dist/';

var path = require('path');
var args = plugins.yargs.argv;

module.exports = {
    // 源码路径相关
    src: {
        root: srcRoot,
        all: srcRoot + '**/*',
        path: {
            html: srcRoot + 'html/',
            sass: srcRoot + 'sass/',
            js: srcRoot + 'js/',
            images: srcRoot + 'images/',
            static: srcRoot + 'static/'
        },
        file: {
            html: srcRoot + '**/*.html',
            sass: srcRoot + 'sass/**/*.scss',
            js: srcRoot + 'js/**/*.js',
            images: srcRoot + 'images/**/*.{jpg,png,gif}',
            static: srcRoot + 'static/**/*'
        }
    },

    // 目标路径相关
    dist: {
        root: distRoot,
        all: distRoot + '**/*',
        path: {
            css: distRoot + 'css/',
            js: distRoot + 'js/'
        },
        file: {
            html: distRoot + '**/*.html',
            css: distRoot + 'css/**/*.css'
        }
    },

    rev: {
        revJson: distRoot + 'rev-manifest.json'
    },

    // 是否是生产环境
    isProduction: args.env === 'prod',

    env: args.env ? args.env : 'dev',

    envJson: path.resolve(__dirname, './env.js')
};
