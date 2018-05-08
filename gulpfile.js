const gulp 		   = require('gulp');
const gulpimagemin = require('gulp-imagemin');
const clean 	   = require('gulp-clean');
const concat 	   = require('gulp-concat');
const htmlReplace  = require('gulp-html-replace');
const cleanCSS	   = require('gulp-clean-css');
const uglify	   = require('gulp-uglify');
const cssmin	   = require('gulp-cssmin');
const rename	   = require('gulp-rename');
const jshint	   = require('gulp-jshint');
const lint		   = require('gulp-lint');


gulp.task('default', ['copy'], function(){
	gulp.start('build-img','merge-css2','merge-js','html-replace');
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

//minifica arquivos .css com cleanCSS
gulp.task('merge-css', function(){
	gulp.src(['css/bootstrap.css',
			  'css/style2.css',
			  'css/font-aewsome.css',
			  'css/flaticon.css'])
	.pipe(concat('site.min.css')) //concatena para arquivo site.min.css
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/css'));
});

//minifica arquivos .css com cssmin
gulp.task('merge-css2', function(){
	gulp.src(['css/bootstrap.css',
			  'css/style2.css',
			  'css/font-aewsome.css',
			  'css/flaticon.css'])
	.pipe(cssmin())
	.pipe(rename('site.min.css'))
	.pipe(gulp.dest('dist/css'))
})

//minifica arquivos .js
gulp.task('merge-js', function(){
	gulp.src('js/**/*.js')
	.pipe(concat('site.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

//analisa e dá dicas sobre os arquivos .js
gulp.task('dica', function(){
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//analisa e dá dicas sobre os arquivos .css
gulp.task('dica-css', function(){
	return gulp.src('css/**/*.css')
	.pipe(lint())
	.pipe(lint.reporter('default'));
});