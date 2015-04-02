var gulp = require('gulp');
var sass = require('gulp-sass');


var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function(){
    browserify('./public/javascripts/src/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('sass', function() {
    gulp.src('public/stylesheets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets/css'));
});


gulp.task('watch', function() {
    gulp.watch("public/javascripts/src/**/*.jsx", ["js"])
    gulp.watch("public/stylesheets/scss/*.scss", ["sass"]);
});

gulp.task('default', ['js','sass','watch']);