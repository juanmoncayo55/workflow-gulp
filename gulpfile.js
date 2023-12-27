'use strict';

const gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass')(require('sass')),
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
			`${dir.node_modules}/normalize.css/normalize.css`,
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
		},
		sass: {outputStyle: 'compressed'},
		es6: { "presets": ["@babel/preset-env"] },
		imagemin:{
			progressive: true,
			use: [pngquant()]
		},
		svgmin : { 
			plugins : [ 
				{ convertColors : false },
				{ removeAttrs : { attrs : ['fill'] } }
			]
		},
		uncss : { html : [`${dir.dist}/*.html`] },
		autoprefixer : { 
			browsers : ['last 5 versions'],
			cascade : false 
		},
		htmlmin : {collapseWhitespace: true}
	};

gulp.task('pug', (done) => {
	gulp
		.src(`${dir.src}/pug/*.pug`)
		.pipe( pug(opts.pug) )
		.pipe( gulp.dest(dir.dist) )
	done()
})

gulp.task('sass', (done) => {
	gulp
		.src(`${dir.src}/scss/*.scss`)
		.pipe( sass(opts.sass) )
		.pipe( gulp.dest(`${dir.dist}/css`) )
	done()
})

gulp.task('es6', (done) => {
	gulp
		.src(`${dir.src}/es6/*.js`)
		.pipe( babel(opts.es6) )
		.pipe( gulp.dest(`${dir.dist}/js`) )
	done()
})

gulp.task('img', (done) => {
	gulp
		.src(`${dir.src}/img/**/*.+(jpg|jpeg|png|gif)`)
		.pipe( imagemin(opts.imagemin) )
		.pipe( gulp.dest(`${dir.dist}/img`) );
	done();
})
gulp.task('svg', () => {
	gulp
		.src( `${dir.src}/img/svg/*.svg` )
		.pipe( svgmin(opts.svgmin) )
		.pipe( gulp.dest(`${dir.dist}/img/svg`) );
});
gulp.task('webp', () => {
	gulp
		.src( `${dir.src}/img/**/*.+(png|jpeg|jpg)` )
		.pipe( webp() )
		.pipe( gulp.dest(`${dir.dist}/img/webp`) );
});

gulp.task('fonts', (done) => {
	gulp
		.src(files.fonts)
		.pipe( gulp.dest(`${dir.dist/fonts}`) );
	done();
});

gulp.task('statics', (done) => {
	gulp
		.src(files.statics)
		.pipe( gulp.dest(dir.dist) )
	done();
});

gulp.task('css', (done) => {
	gulp
		.src(files.CSS)
		.pipe( concat(files.mCSS) )
		.pipe( uncss(opts.uncss) )
		.pipe( autoprefixer(opts.autoprefixer) )
		.pipe( cleanCSS() )
		.pipe( gulp.dest(`${dir.dist}/css`) );
	done();
});

gulp.task('js', (done) => {
	gulp
		.src( files.JS )
		.pipe( concat(files.mJS) )
		.pipe( uglify() )
		.pipe( gulp.dest(`${dir.dist}/js`) );
	done();
});

gulp.task('html', (done) => {
	gulp
		.src(`${dir.dist}/*.html`)
		.pipe( useref() )
		.pipe( htmlmin(opts.htmlmin) )
		.pipe( gulp.dest(dir.dist) );
	done();
});