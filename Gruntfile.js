/*
 * grunt-config-options
 * https://github.com/henvic/grunt-cli-config
 *
 * Copyright (c) 2014 Henrique Vicente
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function exports(grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        },
        complexity: {
            generic: {
                src: ['Gruntfile.js', 'tasks/config_options.js'],
                options: {
                    breakOnErrors: true,
                    errorsOnly: false,
                    cyclomatic: 3,
                    halstead: 8,
                    maintainability: 70,
                    hideComplexFunctions: false
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-complexity');

    grunt.registerTask('test', ['nodeunit']);
    grunt.registerTask('default', ['jshint', 'test', 'complexity']);

};
