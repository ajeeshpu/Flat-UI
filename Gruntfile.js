module.exports = function(grunt) {

  grunt.initConfig({
      less: {
          development: {
              options: {
                  paths: ["css"]
              },
              files: {
                  "css/flat-ui.css": "less/flat-ui.less"
              }
          },
          production: {
              options: {
                  paths: ["css"]
              },
              files: {
                  "css/flat-ui.css": "less/flat-ui.less"
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

};
