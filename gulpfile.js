var gulp = require('gulp');
var scanner = require('i18next-scanner');

gulp.task('i18next', function() {
	return gulp.src(['src/**/*.{js,html}'])
		.pipe(scanner({
			lngs: ['en', 'de'], // supported languages
			resource: {
				// the source path is relative to current working directory
				loadPath: 'assets/i18n/{{lng}}/{{ns}}.json',

				// the destination path is relative to your `gulp.dest()` path
				savePath: 'i18n/{{lng}}/{{ns}}.json'
			}
		}))
		.pipe(gulp.dest('assets'));
});
