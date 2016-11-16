var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    rename    = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task('default', function(){
  gulp.run('html');
  gulp.run('css');
  gulp.run('js');
  gulp.run('img');
  gulp.run('fonts');
  gulp.run('server');
});

gulp.task('server', [], function() {
    return connect.server({
        root: [ 'public' ],
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src(['./src/views/*.html', './src/views/**/*.html'])
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
  gulp.src('src/views/stylesheets/css/*.css')
    .pipe(autoprefixer({
            browsers: ['last 5 Chrome versions', 'iOS > 0', 'Android > 0', '> 5%'],
            cascade: true,
            remove: true
        }))
    .pipe(gulp.dest('public/stylesheets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('js', function() {
  gulp.src(['./src/views/stylesheets/js/*.js','./src/stylesheets/js/**/*.js'])
    .pipe(gulp.dest('public/stylesheets/js'))
    .pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    .pipe(gulp.dest('public/stylesheets/js'));
    //.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('img' , function () {
  gulp.src(['./src/views/stylesheets/img/*.png','./src/views/stylesheets/img/*.jpg'])
    .pipe(gulp.dest('public/stylesheets/img'));
});

gulp.task('fonts' , function() {
  gulp.src(['./src/views/stylesheets/fonts/*.*'])
    .pipe(gulp.dest('public/stylesheets/fonts'));
});

gulp.task('webserver', function() {
  gulp.src( './src/views' ) // 服务器目录（./代表根目录）
  .pipe(webserver({ // 运行gulp-webserver
    livereload: true, // 启用LiveReload
    open: true // 服务器启动时自动打开网页
  }));
});

gulp.task('watch',function(){
  gulp.watch( 'src/*.*', ['html']) // 监听根目录下所有.html文件
});

gulp.task('test',function() {
    gulp.run('watch');
    gulp.run('webserver');
});