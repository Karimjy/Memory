module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
       all: ['src/js/app.js']
    },
    watch:{
      js:{
        files:['src/js/*.js'],
        tasks:['jshint'],
        options:{
          spawn:false
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};