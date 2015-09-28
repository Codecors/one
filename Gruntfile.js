module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        clean: {
            dist:{
                src: ['dist/*']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['src/jquery.sidenav.js']
        },
        copy: {
              main: {
                  expand: true,
                  cwd: 'src/',
                  src: '**',
                  dest: 'dist/'
              }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: false
            }
        },
        
        less: {
            default: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    'src/jquery.sidenav.css': 'src/jquery.sidenav.less'
                }

            },
            dist: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    'dist/jquery.sidenav.min.css': 'src/jquery.sidenav.less'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/jquery.sidenav.min.js': ['src/jquery.sidenav.js']
                },
                options: {
                    preserveComments: false,
                    sourceMap: true,
                    sourceMapName: 'dist/jquery.sidenav.min.map',
                    report: 'min',
                    beautify: {
                        ascii_only: true
                    }
                }
            }
        },

        watch: {
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: [&#39;less:default&#39;, 'jshint:all', 'karma:unit']
            }
        },

        jsdoc : {
            dist : {
                src: ['src/*.js', 'test/*.js'],
                jsdoc: 'node_modules/.bin/jsdoc',
                options: {
                    destination: 'doc'
                }
            }
        },

        release: {
            options: {
                file:   'bower.json',
                npm:    false,
                npmtag: false
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-release');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks(&#39;grunt-contrib-less&#39;);

    grunt.registerTask('dist', ['clean:dist', 'jshint:all', 'jsdoc', 'copy', 'uglify:dist', &#39;less:dist&#39;]);

};
