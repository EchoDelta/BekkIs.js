module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            options: {
              namespace: "templates"
            },
            compile: {
                files: {
                    './public/templates.js': ['./templates/*.hbs']
                }
            }
        },
        less: {
            './public/styles.css': ['./styles/source.less']
        },
        concat: {
            './public/vendor.js': [
                './node_modules/jquery/dist/jquery.js',
                './node_modules/underscore/underscore.js',
                './node_modules/backbone/backbone.js',
                './node_modules/handlebars/dist/handlebars.js'
            ]
        },
        browserify: {
            './public/script.js': [
                './js/app.js'
            ]
        },
        uglify: {
            prod: {
                files: {
                    './public/script.js': ['./public/script.js'],
                    './public/vendor.js': ['./public/vendor.js'],
                    './public/templates.js': ['./public/templates.js']
                }
            }
        }
    });

    grunt.registerTask('dev', ['less', 'concat', 'handlebars', 'browserify']);
    grunt.registerTask('prod', ['less', 'concat', 'handlebars', 'browserify', 'uglify:prod']);
};