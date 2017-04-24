var gulp = require('gulp');
var image = require('gulp-image');
options = {
    src: './public_html',
    dest: './dist'
};
var compress = require('gulp-compress')(gulp, options);

gulp.task('image', function () {
  gulp.src('./public_html/images/**/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: false,
      concurrent: 10
    }))
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('default', ['compress','image']);

