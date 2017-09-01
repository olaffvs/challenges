"use strict";

module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'firstproject/source/*.js',
            dest: 'firstproject/build/js/<%= pkg.name %>.min.js'
          }
        },

        watch: {
          scripts: {
            files: ['**/*.js', '**/*.scss'],
            tasks: ['build'],
            options: {
              spawn: false,
            },
          },
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'firstproject/build/css',
              src: ['*.css', '!*.min.css'],
              dest: 'firstproject/build/css',
              ext: '.min.css'
            }]
          }
        },

        sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'firstproject/build/css/style.css': 'firstproject/source/sass/style.scss'
              }
          }
      }
      });
    
      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-sass');
    
      // Default task(s).
      grunt.registerTask('build', ['uglify', 'sass', 'cssmin']);
      grunt.registerTask('watchfile', ['watch']);
    };