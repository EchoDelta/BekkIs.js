var lessFiles = {'./public/styles.css': ['./styles/*.less']},
    browserifyFiles = {'./public/script.js': ['./js/app.js']},
    uglifyFiles = {'./public/script.js': ['./public/script.js']},
    copyFiles = {'./public/vendor/backbone.js': ['./node_modules/backbone/backbone-min.js']};

module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: lessFiles
            },
        	prod: {
	        	files: lessFiles
        	}
        },
        browserify: {
            dev: {
                files: browserifyFiles
            },
            prod: {
                files: browserifyFiles
            }
        },
        uglify: {
            prod: {
                files: uglifyFiles
            }
        },
        copy: {
            dev: {
                files: copyFiles
            },
            prod: {
                files: copyFiles
            }
        }
    });

    grunt.registerTask('dev', ['less:dev', 'browserify:dev', 'copy:dev']);
    grunt.registerTask('prod', ['less:prod', 'browserify:prod', 'copy:dev', 'uglify:prod']);
};