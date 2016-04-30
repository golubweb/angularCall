module.exports = function(grunt) {

  	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),

	  	cssmin: {
	  		combine: {
	  			files: {
	  				'css/style.min.css': ['css/style.css']
	  			}
	  		}
	  	},

	  	concat: {
	      	dist: {
	        	src: ['js/*.js'],
	        	dest: 'js/main.js'
	      	}
	    },
  	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['cssmin','concat']);

}