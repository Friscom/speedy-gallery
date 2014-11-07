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
	}
}