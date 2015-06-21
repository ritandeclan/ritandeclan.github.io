"Use strict";

var gulp = require('gulp');
   gulpLoadPlugins = require('gulp-load-plugins'),
   plugins = gulpLoadPlugins(),
   app = {};
var del = require('del');

var config = {

   lessFiles: 'public/assets/less',
   compiledDest: 'public/assets/'
 //   // The vendor/bower_components directory is where the bower-installed third-party code lives,
 //   // like Twitter Bootstrap
 //   bowerDir: './bower_components'
};

gulp.task('clean', function(){
     // Delete the assets folder
    del.sync(config.compiledDest + '/css');

});

gulp.task('default');
