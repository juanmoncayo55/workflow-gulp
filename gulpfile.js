'use strict';

const gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	svgmin = require('gulp-svgmin'),
	webp = require('gulp-webp'),
	useref = require('gulp-useref'),
	concat = require('gulp-concat'),
	uncss = require('gulp-uncss'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	dir = {
		src: 'src',
		dist: 'dist',
		node_modules: 'node_modules'
	},
	files = {
		CSS: [
			`${dir.node_modules}/font-awesome/css/font-awesome.min.css`,
			`${dir.dist}/css/estilos.css`
		],
		mCSS: 'estilos.min.css',
		JS: [
			`${dir.dist}/js/codigos.js`
		],
		mJS: 'codigos.min.js',
		fonts: [`${dir.node_modules}/font-awesome/fonts/*.*`],
		statics: [
			`${dir.src}/humans.txt`,
			`${dir.src}/sitemap.xml`
		]
	},
	opts = {
		pug: {
			pretty: true,
			locals: {
				title: "Hola Mundo",
				files: files
			}
		}
	};

gulp.task('pug', (done) =>{
	gulp
		.src(`${dir.src}/pug/*.pug`)
		.pipe( pug(opts.pug) )
		.pipe( gulp.dest(dir.dist) )
	done()
})