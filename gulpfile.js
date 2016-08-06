var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var jade = require('gulp-jade');

var directories = {
    stylus: {
        input: './src/stylus/app.styl',
        output: {
            folder: './dist/css',
            fileName: 'app.css',
        },
    },
    jade: {
        input: './src/jade/index.jade',
        output: {
            folder: './dist',
            fileName: 'index.html',
        },
    },
    fonts: {
        input: './src/fonts/**',
        output: './dist/fonts/',
    },
};

gulp.task('css', () => {
    return gulp
        .src(directories.stylus.input)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: true,
        }))
        .pipe(prefix())
        .pipe(rename(directories.stylus.output.fileName))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(directories.stylus.output.folder));
});

gulp.task('fonts', () => {
    return gulp
        .src(directories.fonts.input)
        .pipe(gulp.dest(
            directories.fonts.output
        ));
});

gulp.task('html', () => {
    return gulp
        .src(directories.jade.input)
        .pipe(jade({
            pretty: false,
        }))
        .pipe(rename(directories.jade.output.fileName))
        .pipe(gulp.dest(directories.jade.output.folder));
});

gulp.task('build', ['css', 'fonts', 'html']);

gulp.task('default', ['build']);