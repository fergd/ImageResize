# ImageResize
A home for my bulk image handling experiments.

Automated Image Handling with Grunt & Imagemagick
In an environment where a developer can get lost chasing every new, exciting tool out there, it’s easy when you’re working on a project to load it up with all kinds of tools, bells, and whistles whether or not you really need them. On my Diecast Tracker project (made upon Meteor), I worked for some time with only HTML, Sass, and Javascript using Meteor’s rendering engine. The time came, however, when I needed to automate a specific task: image resizing. At that point, I brought in Grunt. 

Here is what I did:
If you do not have Grunt installed
Install Grunt (you’ll need NPM)
$ npm install -g grunt-cli
Install the Grunt initializer tool to create Gruntfile.js and packages.js (very handy but optional)
$ npm install -g grunt-init
Create the files 
$ grunt-init gruntfile

Install the image sizing tasks
Primary techniques followed from https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
Install Grunt image sizing 
$ npm install grunt-respimg --save-dev
Install ImageMagick (with homebrew)
$ brew install imagemagick 
Edit your Grunt file. In this case we are not using the additional image sizing tools. (see https://github.com/nwtn/grunt-respimg for more info)
$ grunt --tail 
as of writing this, this is the only way the task runs with --tail













Example Gruntfile.js

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    respimg: {
      nooptim: {
        options: {
          optimize: false,
          widths: [200, 400]
        },
        files: [{
          expand: true,
          cwd: 'images/source/',
          src: ['**.{gif,jpg,png,svg}'],
          dest: 'images/output/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-respimg'); 

  // Default task.
  grunt.registerTask('default', ['respimg']);
};
Sources
http://www.imagemagick.org/script/index.php
https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
https://github.com/nwtn/grunt-respimg


