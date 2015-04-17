var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn"),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css');


//Запуск локального сервера
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});
 
//работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//работа с CSS
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(autoprefixer({
              browsers: ['last 30 version', 'Opera > 5', 'Chrome > 20', 'ff > 10', 'ie > 7'],
              cascade: true
          }))
    .pipe(gulp.dest('./app/css/'))
    .pipe(connect.reload());
   gulp.src('./app/bower/tooltipster/css/themes/*.css')
    .pipe(autoprefixer({
              browsers: ['last 30 version', 'Opera > 5', 'Chrome > 20', 'ff > 10', 'ie > 7'],
              cascade: true
          }))
    .pipe(gulp.dest('./app/bower/tooltipster/css/themes/'))
    .pipe(connect.reload());
    
});

//слежка за файлами 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
});
 
 //задача по умолчанию
gulp.task('default', ['connect', 'watch']);