var sass =  require("node-sass");

// create grunt "wrapper" function/task
module.exports = function (grunt) {

	// create project confugration for grunt
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		sass: {
			options: {
				implementation: sass,
				sourceMap: false
			},
			dist: {
				files: {
					"css/styles.css": "assets/scss/styles.scss"
				}
			}
		},
		watch: {
			files: "assets/scss/**/*.scss",
			tasks: ""
		},
	});

	// load grunt plugins
	require("load-grunt-tasks")(grunt);

	// create tasks for grunt
	grunt.registerTask("default", ["watch"]);

}