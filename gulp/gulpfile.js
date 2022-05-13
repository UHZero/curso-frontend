const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')

function tarefaImagem() {

    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng:false,
            zopflipng: true,
            jpegRecompress:false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurretnt: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
        
}

function tarefasCSS(callback) {

    return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css',
                     'src/style/custom.css' ])
        .pipe(concat('custom.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(){

    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js',
                     'node_modules/jquery/dist/jquery.js',
                     './bootstrap/js/custom.js'])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefaImagem