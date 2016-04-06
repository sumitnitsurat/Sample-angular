/**
 * Created by piyusht on 31/12/15.
 */
var gulp = require('gulp');
var less       = require('gulp-less');

var nodemon = require('gulp-nodemon');
//var connect = require('gulp-connect');


// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');


var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');


gulp.task('startProxyServer', function () {
  nodemon({
    script: 'index.js'
  })
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./src/app/app.js', {debug:true})
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // .pipe(buffer())
        // .pipe(uglify())
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});


gulp.task('watch', function() {
    gulp.watch('src/app/**/*.js', ['browserify']);
})

/* Task to watch less changes */
gulp.task('watch-less', function() {
    gulp.watch('./src/assets/skalera-less/**/*.less' , ['compile-less']);
});

//Copy JS files from src/assets/vendor to
gulp.task('copyfiles', function() {
    gulp.src('./src/assets/fonts/**/*.{ttf,woff,woff2,eot,svg}')
        .pipe(gulp.dest('./public/fonts/'));

      gulp.src('./src/assets/images/*.*')
        .pipe(gulp.dest('./public/images/'));

    gulp.src('./src/assets/css/*.css')
        .pipe(gulp.dest('./public/css/'));

    gulp.src('./src/assets/vendor/**/*.js')
        .pipe(gulp.dest('./public/js/'));

    gulp.src('./src/assets/vendor/**/*.css')
        .pipe(gulp.dest('./public/css/'));

    gulp.src('./src/index.html')
        .pipe(gulp.dest('./public/'));

    //gulp.src('./src/app/charts/*.js')
    //    .pipe(gulp.dest('./public/js/charts/'));

    gulp.src('./src/app/config/*.js')
        .pipe(gulp.dest('./public/js/config/'));

    gulp.src('./src/app/views/**/*.html')
        .pipe(gulp.dest('./public/views/'));

     gulp.src('./src/app/json/*.json')
         .pipe(gulp.dest('./public/json/'));

    gulp.src('./src/app/json/api/v1/**/*.json')
        .pipe(gulp.dest('./public/json/'));
});

gulp.task('compile-less', function() {
    gulp.src('./src/assets/skalera-less/site.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('build', [ 'copyfiles' ,'compile-less','browserify','watch', 'watch-less' , 'startProxyServer']);
gulp.task('ci', [ 'copyfiles' ,'compile-less','browserify' ]);
gulp.task('cd', [ 'copyfiles' ,'compile-less','browserify' ]);

// 'watch', 'watch-less',
//gulp.task('default', ['startProxyServer', 'watch']);
