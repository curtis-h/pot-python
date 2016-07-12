var gulp   = require('gulp');
var concat = require('gulp-concat');
var srcDir = 'resources/';
var config = {
    js: {
        src: [
            srcDir + 'js/*.js',
            srcDir + 'js/**/*.js'
        ],
        dest: 'static/',
        name: 'app.js'
    }
};

gulp.task('default', function() {
    gulp.src(config.js.src)
        .pipe(concat(config.js.name))
        .pipe(gulp.dest(config.js.dest));
});
