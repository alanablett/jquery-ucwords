var gulp = require('gulp'),
    qunit = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./test/jquery.ucwords.html')
        .pipe(qunit());
});

gulp.task('default', ['test']);
