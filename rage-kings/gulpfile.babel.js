import gulp from "gulp";
import plumber from "gulp-plumber";
import del from "del";
import sassGlob from "gulp-sass-glob";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import gulpZip from "gulp-zip";
import browserSync from "browser-sync";
import stream from "webpack-stream";
import webpack from "webpack";
import changed from "gulp-changed";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import webpackConfig from "./webpack.config";
import webpackConfigProd from "./webpack.config.prod";
import packageJson from "./package.json";

const sass = gulpSass(dartSass);

const config = {
  dist: "./dist",
  zip: "./zip",
  html: {
    src: "./app/pages/**/*.html",
    dist: "./dist/",
  },
  styles: {
    main: "./app/assets/styles/main.scss",
    src: "./app/**/*.scss",
    dist: "./dist/assets/css",
  },
  scripts: {
    src: "./app/**/*.js",
    entry: "./app/assets/js/index.js",
    dist: "./dist/assets/js/",
  },
  images: {
    src: "./app/assets/images/**/*.*",
    dist: "./dist/assets/images/",
  },
  fonts: {
    src: "./app/assets/fonts/**/*.*",
    dist: "./dist/assets/fonts/",
  },
  staticFiles: {
    src: "./app/static/**/*.*",
    dist: "./dist/",
  },
};

// Cleaning up the dist folder
const clean = () => del(config.dist);

// Cleaning up the zip folder
const cleanZip = () => del(config.zip);

// Copy assets
const images = () =>
  gulp.src(config.images.src).pipe(changed(config.images.dist)).pipe(gulp.dest(config.images.dist));

// Copy fonts
const fonts = () =>
  gulp.src(config.fonts.src).pipe(changed(config.fonts.dist)).pipe(gulp.dest(config.fonts.dist));

// Copy static folder
const staticFiles = () =>
  gulp
    .src(config.staticFiles.src)
    .pipe(changed(config.staticFiles.dist))
    .pipe(gulp.dest(config.staticFiles.dist));

// Copy static folder
const html = () =>
  gulp.src(config.html.src).pipe(changed(config.html.dist)).pipe(gulp.dest(config.html.dist));

// Styles
const styles = () =>
  gulp
    .src(config.styles.main, { sourcemaps: true })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass
        .sync({
          includePaths: ["./node_modules"],
        })
        .on("error", sass.logError),
    )
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(config.styles.dist, { sourcemaps: true }));

// Styles Production
const stylesProd = () =>
  gulp
    .src(config.styles.main, { sourcemaps: false })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(
      sass
        .sync({
          includePaths: ["./node_modules"],
          outputStyle: "compressed",
        })
        .on("error", sass.logError),
    )
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(config.styles.dist, { sourcemaps: false }));

// Scripts
const scripts = () =>
  gulp
    .src(config.scripts.entry)
    .pipe(stream(webpackConfig, webpack))
    .pipe(gulp.dest(config.scripts.dist));

// Scripts Prod
const scriptsProd = () =>
  gulp
    .src(config.scripts.entry)
    .pipe(stream(webpackConfigProd, webpack))
    .pipe(gulp.dest(config.scripts.dist));

// Watch
const watch = () => {
  gulp.watch(config.images.src, images);
  gulp.watch(config.fonts.src, fonts);
  gulp.watch(config.staticFiles.src, staticFiles);
  gulp.watch(config.styles.src, styles);
  gulp.watch(config.html.src, html);
  gulp.watch(config.scripts.src, scripts);
};

// Server
const server = () => {
  browserSync.create().init({
    server: config.dist,
    files: [
      `${config.html.dist}/*.html`,
      `${config.styles.dist}/*.css`,
      `${config.scripts.dist}/*.js`,
      {
        match: `${config.images.dist}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
  });
  browserSync.watch(`${config.dist}/**/*.*`, browserSync.reload);
};

// Zip arhive
const archive = () => {
  const project = packageJson;
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const dd = day < 10 ? `0${day}` : day;
  const mm = month < 10 ? `0${month}` : month;
  const yyyy = date.getFullYear();
  const today = `${yyyy}.${mm}.${dd}`;

  const projectName = project.name;

  return gulp
    .src(`${config.dist}/**`)
    .pipe(gulpZip(`${projectName}-${today}.zip`))
    .pipe(gulp.dest(config.zip));
};

export default gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, fonts, staticFiles, images),
  gulp.parallel(watch, server),
);

export const build = gulp.series(
  clean,
  gulp.parallel(html, stylesProd, scriptsProd, fonts, staticFiles, images, cleanZip),
);

export const zip = gulp.series(cleanZip, archive);
