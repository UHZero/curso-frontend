const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const { parallel } = require('gulp')
const { series } = require('gulp')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const sass = require('gulp-sass')( require('node-sass') )

function tarefaImagem() {

    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurretnt: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))

}

function tarefasCSS(callback) {

    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css',
              './src/css/stylesass.css'])
        .pipe(concat('custom.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))

    return callback()
}

function tarefasJS(callback) {

    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/jquery/dist/jquery.js',
        './bootstrap/js/custom.js'])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))

    return callback()
}

function tarefasHTML(callback) {

    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

function tarefasSASS(callback){

    gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))

    callback()
}

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)
})

function tarefasFont(callback) {

    gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./dist/fonts'))

    return callback()
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefaImagem
exports.html = tarefasHTML
exports.sass = tarefasSASS
exports.font = tarefasFont

const process = series( tarefasSASS, tarefasHTML, tarefasJS, tarefasCSS, tarefasFont )

exports.default = process