var gulp   = require('gulp');
var concat = require('gulp-concat');
var sass   = require('gulp-sass');
var srcDir = 'resources/';
var config = {
    js: {
        src: [
            srcDir + 'js/*.js',
            srcDir + 'js/**/*.js'
        ],
        dest: 'static/',
        name: 'app.js'
    },
    sass: {
        src: srcDir + 'css/*.scss',
        dest: 'static/'
    }
};

gulp.task('js', function() {
    gulp.src(config.js.src)
        .pipe(concat(config.js.name))
        .pipe(gulp.dest(config.js.dest));
});


gulp.task('sass', function() {
    gulp.src(config.sass.src)
        .pipe(sass())
        .pipe(gulp.dest(config.sass.dest));
});

gulp.task('default', ['js', 'sass'], function() {
    // run other tasks through dependencies
});