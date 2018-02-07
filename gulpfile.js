var gulp = require('gulp');
var sass = require('gulp-sass');

var devpath = "dev_styles/sass/**/*.scss";
var prodpath = "dev_styles/css";

var sassc = function(){
	return gulp.src(devpath).pipe(sass()).pipe(gulp.dest(prodpath));
};

gulp.task('sass', sassc);