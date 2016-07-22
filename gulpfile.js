'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./scss/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(prefix('last 2 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
			.pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});