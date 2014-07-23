var lessFiles = {'./public/styles.css': ['./styles/*.less']},
    browserifyFiles = {'./public/script.js': ['./js/app.js']},
    uglifyFiles = {'./public/script.js': ['./public/script.js']},
    handlebarsFiles = {'./public/templates.js': ['./templates/*.hbs']};

module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

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
        handlebars: {
            dev: {
                files: handlebarsFiles
            },
            prod: {
                files: handlebarsFiles
            }
        }
    });

    grunt.registerTask('dev', ['less:dev', 'browserify:dev', 'handlebars:dev']);
    grunt.registerTask('prod', ['less:prod', 'browserify:prod', 'uglify:prod', 'handlebars:prod']);
};