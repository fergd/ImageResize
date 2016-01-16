/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    respimg: {
      nooptim: {
        options: {
          optimize: false,
          widths: [960]
        },
        files: [{
          expand: true,
          cwd: 'source/',
          src: ['**.{gif,jpg,png,svg,JPG}'],
          dest: 'output/'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-qunit');
 // grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-respimg'); 

  // Default task.
  grunt.registerTask('default', ['respimg']);
};
