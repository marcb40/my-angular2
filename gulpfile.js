// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')


gulp.task('connect', function () {
  connect.server({
    root: 'public',
    port: 8888
  });
});



var config = {
    bootstrapDir: './app/bower_components/bootstrap-sass',
    publicDir: './public',
};

gulp.task('browserify', function() {
    // Grabs the app.js file
    console.log('app compile');
    return browserify('./app/js/main.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest(config.publicDir + '/js'));
})

gulp.task('sass', function() {
    return gulp.src('./app/sass/style.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});



gulp.task('watch', function() {

    gulp.watch('app/**/*.js', ['browserify'])
    gulp.watch('app/sass/style.scss', ['sass'])
})

gulp.task('default', ['connect', 'watch'])