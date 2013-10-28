module.exports = function(grunt) {


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false,
        globals: {
          describe: false,
          it: false,
          suite: false,
          test: false,
          before: false,
          after: false
        }
      },    
      all: {
        src: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
      }
    },      
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['mochaTest'],
      },
    },    
  });

  grunt.registerTask('default', ['jshint', 'mochaTest']);

};