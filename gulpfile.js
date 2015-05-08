var
	gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn"),
	autoprefixer = require('gulp-autoprefixer'),
	concatCss = require('gulp-concat-css'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	wiredep = require('wiredep').stream;



gulp.task('make', function () {
    var assets = useref.assets();
    
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});



gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});
 

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});


gulp.task('css', function () {
  gulp.src('./app/css/**/*.css')
    .pipe(autoprefixer({
              browsers: ['last 30 version', 'Opera > 5', 'Chrome > 20', 'ff > 10', 'ie > 7'],
              cascade: true
          }))
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['bower.json'], ['bower'])
});
 

gulp.task('default', ['connect', 'watch']);


gulp.task('bower', function () {
  gulp.src('./app/*.html')
    .pipe(wiredep({
      direcory: "app/bower"
    }))
    .pipe(gulp.dest('./app'));
});