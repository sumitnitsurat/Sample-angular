
var gulp = require('gulp');

var nodemon = require('gulp-nodemon');
//var connect = require('gulp-connect');
var connect = require('gulp-connect');

// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');


 gulp.task('connect', function () {
     connect.server({
         root: 'public',
         port: 9999
     })
 });

 gulp.task('browserify', function() {
     // Grabs the app.js file
     return browserify('./src/app.js')
     // bundles it and creates a file called main.js
         .bundle()
         .pipe(source('main.js'))
         // saves it the public/js/ directory
         .pipe(gulp.dest('./public/js/'));
 });

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['browserify']);
})

/* Task to watch less changes */
gulp.task('watch-less', function() {
    gulp.watch('./src/assets/demo-less/**/*.less' , ['compile-less']);
});

gulp.task('copyfiles', function() {

    gulp.src('index.html')
        .pipe(gulp.dest('./public/'));
		
	 gulp.src('./src/assets/js/*.js')
        .pipe(gulp.dest('./public/js/'));

    gulp.src('./src/assets/css/*.css')
        .pipe(gulp.dest('./public/css/'));	

    //gulp.src('./src/app/charts/*.js')
    //    .pipe(gulp.dest('./public/js/charts/'));

    gulp.src('./src/config/*.js')
        .pipe(gulp.dest('./public/js/config/'));

    gulp.src('./src/views/**/*.html')
        .pipe(gulp.dest('./public/views/'));

     gulp.src('./src/app/json/*.json')
         .pipe(gulp.dest('./public/json/'));

    gulp.src('./src/app/json/api/v1/**/*.json')
        .pipe(gulp.dest('./public/json/'));
});

gulp.task('build', [ 'copyfiles' ,'connect','browserify','watch', 'watch-less' ]);
gulp.task('cd', [ 'copyfiles' ,'browserify' ]);

// 'watch', 'watch-less',
//gulp.task('default', ['connect', 'watch']);
