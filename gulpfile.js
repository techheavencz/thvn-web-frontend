const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const babelify = require("babelify");
const tsify = require("tsify");
const envify = require("envify");
const uglifyify = require("uglifyify")

const paths = {
	style: {
		src: 'src/style/*.scss',
		dest: 'public/style',
	},
	react: {
		src: 'src/events/index.tsx',
		dest: 'public/script/events'
	}
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

function react() {
	return browserify([paths.react.src], {
		debug: process.env.NODE_ENV==="production",
	})
		.plugin(tsify)
		.transform(envify)
		.transform(babelify, {
			presets: [
				["@babel/preset-env", {
					corejs: {
						version: "3.18.3",
						proposals: true,
						shippedProposals: true
					},
					targets: {
						esmodules: true
					},
					useBuiltIns: "usage"
				}],
				"@babel/preset-typescript",
				"@babel/preset-react"
			],
			extensions: [".ts", ".tsx", ".js", ".jsx"],
			only: ["src/events/**/*"],
			global: true
		})
		.transform(uglifyify, {
			global: true,
		}).bundle()
		.pipe(source("app.js"))
		.pipe(gulp.dest(paths.react.dest))
}


exports.default = gulp.series(style, react, watch);
exports.build = style;
exports.react = react;
exports.watch = watch;
