const gulp = require('gulp');
const gulpimagemin = require('gulp-imagemin');

gulp.task('copy', function() {
	gulp.src('images/**/*')
	.pipe(gulp.dest('dist/imagens') );
});

gulp.task('build-img', function() {
	gulp.src('dist/imagens/**/*')
	.pipe(gulpimagemin() )
	.pipe(gulp.dest('dist/imagens') );
});

gulp.task('clean', function() {
	gulp.src('dist')
	.pipe(clean() );
});