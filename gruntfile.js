module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development:{
        files:{
          'main.css': 'main.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files:{
          'main.min.css': 'main.less'
        }
      }
    },
    watch: {
      less:{
        files: ['./src/styles/**/*.less'],
        task: ['less:development']
      }
    },
    uglify: {
      target: {
        files: {
          'dist/scripts/main.min.js' : 'src/scripts/main.js'
        }
      }
    }

  });
  grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(() => {
      console.log("Ola grunt");
      done();
    }, 3000);
  });

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', 'less:production', "uglify");
};
