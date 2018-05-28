var	gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer');



gulp.task('sass', function(){ 
    return gulp.src('app/sass/*.scss')
        .pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function(){
	browserSync({ 
        server: { 
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('sass', function(){ 
    return gulp.src('app/sass/*.scss') 
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['sass','browserSync'], function(){
	gulp.watch('app/sass/main.scss', ['sass']);
});















gulp.task('build', ['sass', 'scripts'], function() {

    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});