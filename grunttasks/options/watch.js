module.exports = {
	options: {
		livereload: true,
	},
	scripts: {
		files: ['src/*.js'],
		tasks: ['concat', 'uglify'],
		options: {
		  spawn: false,
		}
	},
	css: {
		files: ['src/css/sources/*.scss'],
		tasks: ['compass'],
		options: {
			spawn: false,
		}
	}	
}