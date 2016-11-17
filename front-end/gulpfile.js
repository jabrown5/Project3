var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// nodemon it up!
gulp.task('Nodemon', restartServer);

function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js ejs scss sql html css'
    });
};

gulp.task('default', ['Nodemon']);