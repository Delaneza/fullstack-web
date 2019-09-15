const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();

gulp.task('clean-styles', () => {
    const destination = ['dist/css'];
    return gulp.src(destination)
        .pipe(plugins.clean());
})

gulp.task('clean-scripts', () => {
    const destination = ['dist/js'];
    return gulp.src(destination)
        .pipe(plugins.clean());
})

gulp.task('styles', () => {
    const cssDestinations = ['src/**/*.css'];
    const scssDestinations = ['src/**/*.scss'];

    gulp.src(scssDestinations)
        .pipe(plugins.sass())
        .pipe(gulp.dest('dist/css'));

    gulp.src(cssDestinations)
        .pipe(gulp.dest('dist/css'));

    return gulp.src('')
})
// Para server
// Watch styles, config

// gulp.task('scripts', ['clean-scripts'], () => {
//     return gulp.src('source-files')
//         .pipe(plugins.sass()) // Using gulp-sass
//         .pipe(gulp.dest('dist/css'))
// })

// gulp.task('watch-js', () => {
// })

// gulp.task('watch-css', () => {
// })

// gulp.task('serve', ['config', 'start']);

// gulp.task('start', ['serve']);

// gulp.task('dev', () => {

// });

// gulp.task('build', () => {

// });