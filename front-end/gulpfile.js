var gulp = require('gulp');
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var nodemon = require('gulp-nodemon');


// write a task that will convert a .scss file to a .css file.
gulp.task("compile-sass", function() {
    gulp.src("./public/stylesheets/style.sass")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/"))
});
gulp.task("watch-sass", function() {
    gulp.watch(["./public/stylesheets/style.sass"],["compile-sass"]);
});

// nodemon it up!
gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js ejs scss sql html css'
    });
};

gulp.task('default', ['Nodemon','watch-sass']);