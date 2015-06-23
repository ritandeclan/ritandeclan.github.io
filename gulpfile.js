"Use strict";

var gulp = require('gulp');
   gulpLoadPlugins = require('gulp-load-plugins'),
   plugins = gulpLoadPlugins(),
   app = {};
var del = require('del');

var config = {

   lessFiles: './public/assets/less',
   compiledDest: './public/assets'
 //   // The vendor/bower_components directory is where the bower-installed third-party code lives,
 //   // like Twitter Bootstrap
 //   bowerDir: './bower_components'
};

// // Gulp Bower Task
gulp.task('bower', function() {
    return plugins.bower('./bower_components')
        .pipe(gulp.dest(config.compiledDest))
})

gulp.task('clean', function(){
     // Delete the assets folder
    del.sync(config.compiledDest + '/css/*');

});

// Dynamic addStyle class creates sourcemaps, converts less into css, concatenates, and minifies css
app.addStyle = function(paths) {

    return gulp.src(paths)

    .pipe(plugins.less(paths))

    .pipe(gulp.dest(config.compiledDest + '/css/'))

};

gulp.task('styles', ['clean'], function(){

    return app.addStyle([
        config.lessFiles + '/**/*.less'
    ])

});

// Watch task that listens for changes in the files contained within the listed directories.
gulp.task('watch', ['styles'], function () {

    // The following makes it so that the js will only be uglified when we run the gulp --production tag
    // plugins.util.noop() does absolutely nothing
    config.production ? plugins.util.noop() : gulp.watch(config.lessFiles + '/**/*.less', ['styles']);
});

gulp.task('default', ['clean', 'styles', 'watch']);
