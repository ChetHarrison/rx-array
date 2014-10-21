'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		docco: {
			doc: {
				src: ['rx-array.js'],
				options: {
					output: 'docs/'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-docco');

	grunt.registerTask('doc', ['docco']);
};
