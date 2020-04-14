const gulp = require("gulp");
const concatenate = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const autoPrefix = require("gulp-autoprefixer");
const gulpSASS = require("gulp-sass");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');

const sassFiles = [
    "./CarRO/src/scss/custom.scss",
    "./node_modules/bootstrap/scss/_variables.scss"
];

const vendorJsFiles = [
    "./node_modules/moment/moment.js",
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js",
    "./node_modules/angular/angular.js",
    "./node_modules/angular-moment/angular-moment.js",
    "./node_modules/angular-route/angular-route.js",
];


gulp.task('sass', function (done) {
    gulp
        .src(sassFiles)
        .pipe(gulpSASS())
        .pipe(concatenate("styles.css"))
        .pipe(gulp.dest("./CarRO/static/css/"))
        .pipe(
            autoPrefix({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(cleanCSS())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("./CarRO/static/css/"));
    done();
});

gulp.task('js-vendor', function (done) {
    gulp
        .src(vendorJsFiles)
        .pipe(concatenate("bundle.js"))
        // .pipe(uglify())
        .pipe(gulp.dest("./CarRO/static/vendor/"));
    done();
});

gulp.task("build", gulp.parallel(["sass", "js-vendor"]));

gulp.task('watch', function (done) {
    gulp.watch(sassFiles, gulp.series('sass'));
    gulp.watch(vendorJsFiles, gulp.series('js-vendor'));
    done();
});

gulp.task('default', gulp.series('watch'));