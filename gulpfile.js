const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const paths = {
    style: {
        src: 'src/style/*.scss',
        dest: 'public/style',
    },
};

function style() {
    return gulp
        .src(paths.style.src)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.style.dest));
}

function watch() {
    return gulp.watch(paths.style.src, style);
}

exports.default = gulp.series(style, watch);
exports.build = style;
exports.watch = watch;
