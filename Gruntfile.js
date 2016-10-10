
module.exports = function(grunt) {

  'use strict';


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({

    clean: ['./public'],

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./app/index.html'],
            dest: './public/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['./app/views/*'],
            dest: './public/views/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['./app/images/*'],
            dest: './public/images/',
            filter: 'isFile'
          }
        ]
      }
    },

    uglify: {
      options: {
        beautify: false,
        compress: true,
        mangle: true
      },
      /*jshint camelcase: false */
      my_target: {
        files: {
          './public/js/main.min.js': ['./app/js/**/*.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          './public/css/main.css':'./app/scss/main.scss'
        }
      }
    },

    watch: {
      tasks:  ['clean', 'copy', 'uglify', 'sass'],
      options: {
        livereload: true,
        nospawn: true
      },
      files: ['./app/**']
    },
    connect: {
      server: {
          options: {
              port: 7777,
              base: 'public'
          }
      }
    },

    ngdocs: {
        all: ['./app/js/{,*/}*.js'],
        options: {
            title: 'WeatherApp Docs',
            html5Mode: true
        }
    },

    karma: {
        unit: {
            configFile: 'karma.conf.js'
        }
    },

    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        all: {
            src: [
                'Gruntfile.js',
                '.app/js/**/*.js'
            ]
        },
        test: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['tests/**/*.js']
        }
    }

    });

    grunt.registerTask('default', [
        'clean',
        'jshint',
        'copy',
        'uglify',
        'sass',
        'connect',
        'watch'
    ]);

    grunt.registerTask('doc', [
        'ngdocs'
    ]);

    grunt.registerTask('test', [
        'jshint',
        'karma'
    ]);


};
