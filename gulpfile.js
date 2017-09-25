var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var gutil = require('gulp-util');
var critical = require('critical').stream;

gulp.task('critical', function () {
    return gulp.src('src/index.html')
        .pipe(critical({
          base: 'dist/',
          inline: true,
          minify: true,
          css: ['src/css/style.css']
        }))
        .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS({
      keepBreaks: false
    }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/html'));
});

gulp.task('compress', function(){
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('images', function(){
	return gulp.src('src/img/*')
	.pipe(imagemin([
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
  ]))
	.pipe(gulp.dest('dist/img'))
});
