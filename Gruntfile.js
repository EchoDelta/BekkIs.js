var lessFiles = ['./styles/*.less'],
    cssDestination = './public/styles.css',
    browserifyFiles = ['./js/app.js'],
    jsScriptDestination = './public/script.js';

module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                src: lessFiles,
                dest: cssDestination
            },
        	prod: {
	        	src: lessFiles,
	        	dest: cssDestination
        	}
        },
        browserify: {
            dev: {
                src: browserifyFiles,
                dest: jsScriptDestination
            },
            prod: {
                src: browserifyFiles,
                dest: jsScriptDestination
            }
        },
        uglify: {
            prod: {
                src: jsScriptDestination,
                dest: jsScriptDestination
            }
        }
    });

    grunt.registerTask('dev', ['less:dev', 'browserify:dev']);
    grunt.registerTask('prod', ['less:prod', 'browserify:prod', 'uglify:prod']);
};