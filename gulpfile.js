var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var jade = require('gulp-jade');

var directories = {
    js: {
        input: './src/js/app.js',
        output: './dist/js'
    },
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
    metadata: {
        input: './src/metadata/**',
        output: './dist/metadata/',
    },
    rootFiles: {
        input: [
            './src/robots.txt',
            './src/sitemap.xml',
            './src/web.config',
            './src/googlefec974c4fcd4ea72.html',
        ],
        output: './dist/',
    },
};

gulp.task('js', () => {
    var bundler = browserify(directories.js.input)
        .transform(babelify, {/* options */ });

    return bundler.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(directories.js.output))
});

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

gulp.task('html', () => {
    return gulp
        .src(directories.jade.input)
        .pipe(jade({
            pretty: false,
        }))
        .pipe(rename(directories.jade.output.fileName))
        .pipe(gulp.dest(directories.jade.output.folder));
});

gulp.task('fonts', () => {
    return gulp
        .src(directories.fonts.input)
        .pipe(gulp.dest(
            directories.fonts.output
        ));
});

gulp.task('metadata', () => {
    return gulp
        .src(directories.metadata.input)
        .pipe(gulp.dest(
            directories.metadata.output
        ));
});

gulp.task('root-files', () => {
    return gulp
        .src(directories.rootFiles.input)
        .pipe(gulp.dest(
            directories.rootFiles.output
        ));
});

gulp.task('build', ['js', 'css', 'html', 'fonts', 'metadata', 'root-files']);

gulp.task('default', ['build']);