var srcRoot = 'src/';
var distRoot = 'dist/';

var args = plugins.yargs.argv;

module.exports = {
    // 源码路径相关
    src: {
        root: srcRoot,
        all: srcRoot + '**/*',
        path: {
            html: srcRoot + 'html/',
            sass: srcRoot + 'sass/'
        },
        file: {
            html: srcRoot + '**/*.html',
            sass: srcRoot + 'sass/**/*.scss'
        }
    },

    // 目标路径相关
    dist: {
        root: distRoot,
        all: distRoot + '**/*',
        path: {
            css: distRoot + 'css/'
        },
        file: {}
    },

    // 是否是生产环境
    isProduction: args.env === 'prod'
};
