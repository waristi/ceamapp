var gulp = require('gulp');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');
var shell = require('gulp-shell');

gulp.task('stylus', function () {
    return gulp.src('./stylus/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./client/css'))
      .pipe(notify("Stylus se compilo correctamente!"));
});

gulp.task('node:test', shell.task([
    'npm run coverage'
]))

gulp.task('node:serve', shell.task([
    'npm start'
]));



gulp.task('watch', function () {
    gulp.watch('./stylus/*.styl', ['stylus']);
});

gulp.task('default', ['stylus', 'node:serve', 'node:test', 'watch']);