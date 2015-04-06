var gulp = require('gulp');
var less = require('gulp-less');


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

gulp.task('less', function() {
    gulp.src('public/stylesheets/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/stylesheets/css'));
});


gulp.task('watch', function() {
    gulp.watch("public/javascripts/src/**/*.jsx", ["js"])
    gulp.watch("public/stylesheets/less/*.less", ["less"]);
});

gulp.task('default', ['js','less','watch']);