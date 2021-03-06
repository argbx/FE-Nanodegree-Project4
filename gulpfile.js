var gulp = require('gulp')
    minifycss = require('gulp-minify-css')
    concat = require('gulp-concat')
    imagemin = require('gulp-imagemin')
    uglify = require('gulp-uglify')
    minifyhtml = require('gulp-minify-html')


gulp.task('minify-html',function(){

	var opts = {
		conditionals: true,
		spare: true
	};

	return gulp.src('views/*.html')
		.pipe(minifyhtml(opts))
    	.pipe(gulp.dest('views/dist/'));
})


  gulp.task('scripts',function(){
  gulp.src('views/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('views/dist/js'));
})

  gulp.task('css', function() {
  return gulp.src('views/css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('views/dist/css'))
})

 gulp.task('default',function(){
  gulp.run('css')
  gulp.watch('css/*.css',function(){
      gulp.run('css')
  })
})

 gulp.task('images', function() {
  return gulp.src('views/images/*')
    .pipe((imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('views/dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});