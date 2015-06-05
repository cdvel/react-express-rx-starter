var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// turn react's jsx files into js
gulp.task('js', function(){
    browserify('./public/javascripts/src/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

var mPaths = ["public/libraries/bootswatch-scss/readable/", 
                "public/libraries/bootstrap-sass-official/assets/stylesheets/"];

// turn scss files into css
gulp.task("sass", function() {
    gulp.src(['public/stylesheets/scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
            .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public/stylesheets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({keepSpecialComments: 0, relativeTo: 'stylesheets/scss/', processImport: true}))
        .pipe(gulp.dest('public/stylesheets/css'));
});

// look out for changes and recompile if needed
gulp.task('watch', function() {
    gulp.watch("public/javascripts/src/**/*.jsx", ["js"])
    gulp.watch("public/stylesheets/scss/*.scss", ["sass"]);
});

gulp.task('compile', ['js','sass']);
gulp.task('default', ['js','sass','watch']);
