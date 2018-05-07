const gulp 		   = require('gulp');
const gulpimagemin = require('gulp-imagemin');
const clean 	   = require('gulp-clean');
const concat 	   = require('gulp-concat');
const htmlReplace  = require('gulp-html-replace');
const cleanCSS	   = require('gulp-clean-css');


gulp.task('default', ['copy'], function(){
	gulp.start('build-img','merge-css','html-replace');
});

//copia de images para dist(criando-a caso não exista)
gulp.task('copy', ['clean'], function() {
	return gulp.src('images/**/*')
	.pipe(gulp.dest('dist') );
});

//minifica as imagens de images e salva em dist
gulp.task('build-img', function() {
	gulp.src('images/**/*')
	.pipe(gulpimagemin() )
	.pipe(gulp.dest('dist') );
});

//apaga dist
gulp.task('clean', function() {
	return gulp.src('dist')
	.pipe(clean() );
});

//concatenar arquivos .css para arquivo site.css
gulp.task('concatena-css', function(){
	gulp.src('css/**/*.css')
	.pipe(concat(site.css))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('html-replace', function(){
	gulp.src('*.html')
	.pipe(htmlReplace({css:'css/site.css'}))
	.pipe(gulp.dest('dist'));
});

//minifica arquivos .css
gulp.task('merge-css', function(){
	gulp.src(['css/bootstrap.css',
			  'css/style2.css',
			  'css/font-aewsome.css',
			  'css/flaticon.css'])
	.pipe(concat('site.css'))
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/css'));
});