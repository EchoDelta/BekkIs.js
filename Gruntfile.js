module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
        	files: {
	        	src: './styles/*.less',
	        	dest: './public/styles.css'
        	}
        }
    });

    grunt.registerTask('default', ['less']);
};