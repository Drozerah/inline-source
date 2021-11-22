const gulp = require('gulp')
const chalk = require('chalk')
// https://www.npmjs.com/package/gulp-inline-source
const inlinesource = require('gulp-inline-source')

// Dummy task
gulp.task('dummy', cb => {
  console.log(chalk.yellow('=> Dummy task call')) // !DEBUG
  cb()
})

// Inline source
gulp.task('inlinesource', function () {
  return gulp.src('./index.html')
      .pipe(inlinesource({
        compress: true
    }))
      .pipe(gulp.dest('./dist'));
})