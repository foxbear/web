 module.exports = function(grunt) {
     grunt.initConfig({

         less: {
             development: {
                 options: {
                     paths: ["client/stylesheets"]
                 },
                 files: {"client/stylesheets/bootstrap_theme.css": "client/stylesheets/bootstrap_theme.less"}
             }
         },
        watch: {
          styles: {
            files: ['client/stylesheets/**/*.less'], // which files to watch
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
        }
     });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-watch');
     // grunt.registerTask('default', ['less']);
     grunt.registerTask('default', ['less', 'watch']);
 };