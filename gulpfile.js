var gulp = require('gulp');
var scanner = require('i18next-scanner');

gulp.task('i18next', function() {
	return gulp.src(['*.{js,html}'])
		.pipe(scanner({
			lngs: ['en', 'es', 'pt'], // supported languages
			resource: {
				// the source path is relative to current working directory
				loadPath: 'locales/{{lng}}/{{ns}}.json',

				// the destination path is relative to your `gulp.dest()` path
				savePath: 'locales/{{lng}}/{{ns}}.json'
			}
		}))
		.pipe(gulp.dest('./'));
});
