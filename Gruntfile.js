module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'compile-handlebars': {
            all: {
                files: [{
                    expand: true,
                    cwd: 'res/blog',
                    src: '**/*.html',
                    dest: 'blog/',
                    ext: '.html'
                }],
                // helpers: 'res/templates/helpers/**/*.js',
                // templateData: 'res/templates/data/**/*.json',
                partials: 'res/templates/partials/**/*.hbs',
                registerFullPath: false
            }
        },
        exec: {
            'clean_build': {
                cmd: 'rm -rf blog; mkdir blog'
            }
        },
        watch: {
            scripts: {
                files: ['res/**/*'],
                tasks: ['build'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    // Load Grunt Compile Handlebars
    // https://github.com/patrickkettner/grunt-compile-handlebars
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['exec:clean_build',
                                 'compile-handlebars'
    ]);
    grunt.registerTask('clean', ['exec:clean_build'])

};