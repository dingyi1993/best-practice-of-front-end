var srcRoot = 'src/';
var distRoot = 'dist/';

module.exports = {
    src: {
        root: srcRoot,
        html: srcRoot + 'html/**',
        sass: srcRoot + 'sass/**/*.{scss,css}'
    },
    dist: {
        root: 'dist/',
        all: distRoot + '**',
        css: distRoot + 'css/'
    }
};