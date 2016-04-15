
var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var bootlint = require('gulp-bootlint');


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
		
	 gulp.src('./dist/**/*.*')
        .pipe(gulp.dest('./public/dist/'));

    gulp.src('./build/**/*.*')
        .pipe(gulp.dest('./public/build/'));
	
	gulp.src('./bootstrap/**/*.*')
        .pipe(gulp.dest('./public/bootstrap/'));
		
	gulp.src('./pages/**/*.*')
        .pipe(gulp.dest('./public/pages/'));

	gulp.src('./plugins/**/*.*')
        .pipe(gulp.dest('./public/plugins/'));	

	gulp.src('./documentation/**/*.*')
        .pipe(gulp.dest('./public/documentation/'));		

    //gulp.src('./src/app/charts/*.js')
    //    .pipe(gulp.dest('./public/js/charts/'));

    gulp.src('./src/config/*.js')
        .pipe(gulp.dest('./public/js/config/'));
		
	 gulp.src('./charts/**/*.*')
        .pipe(gulp.dest('./public/charts/'));	

    gulp.src('./src/views/**/*.html')
        .pipe(gulp.dest('./public/views/'));

     gulp.src('./src/json/*.json')
         .pipe(gulp.dest('./public/json/'));

    gulp.src('./src/app/json/api/v1/**/*.json')
        .pipe(gulp.dest('./public/json/'));
});

/*..... admin LTE tasks ...*/



gulp.task('watch', function () {
  gulp.watch('build/less/*.less,build/less/skins/*.less,dist/js/app.js', [ /* dependencies */ ]);
});

gulp.task('watch', function () {
  gulp.watch('less,uglify', [ /* dependencies */ ]);
});

gulp.task('less', function () {
  return gulp
    .src('build/less/AdminLTE.less')
    .pipe(gulp.dest('dist/css/AdminLTE.css,dist/css/skins/skin-blue.css,dist/css/skins/skin-black.css,dist/css/skins/skin-yellow.css,dist/css/skins/skin-green.css,dist/css/skins/skin-red.css,dist/css/skins/skin-purple.css,dist/css/skins/skin-blue-light.css,dist/css/skins/skin-black-light.css,dist/css/skins/skin-yellow-light.css,dist/css/skins/skin-green-light.css,dist/css/skins/skin-red-light.css,dist/css/skins/skin-purple-light.css,dist/css/skins/_all-skins.css'))
  ;
});


gulp.task('uglify', function () {
  return gulp
    .src('undefined')
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
  ;
});

gulp.task('includes', function () {
  return gulp
    .src('*.html')
    .pipe(gulp.dest('documentation/'))
  ;
});

gulp.task('jshint', function () {
  return gulp
    .src('dist/js/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
});

gulp.task('jshint', function () { // WARNING: potential duplicate task
  return gulp
    .src('dist/js/demo.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
});

gulp.task('jshint', function () { // WARNING: potential duplicate task
  return gulp
    .src('dist/js/pages/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
  ;
});

gulp.task('csslint', function () {
  return gulp
    .src('dist/css/AdminLTE.css')
    .pipe(gulp.dest('dist'))
  ;
});

gulp.task('bootlint', function () {
  return gulp
    .src('pages/**/*.html,*.html')
  ;
});


gulp.task('lint', ["jshint","csslint","bootlint"]);


/*......Admin Lte tasks endds.....*/


gulp.task('build', [ 'copyfiles' ,'connect','browserify','watch', 'watch-less' ]);
gulp.task('cd', [ 'copyfiles' ,'browserify' ]);

// 'watch', 'watch-less',
//gulp.task('default', ['connect', 'watch']);
