var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
/*
function defaultTask(cb){
  cb();
}
exports.default = defaultTask
*/
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("*.html").on("change", reload);
});