module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['app/**/*.ts'],
        dest: 'public/js',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          sourceMap: true,
          declaration: false
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['typescript']);

};
