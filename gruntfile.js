module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dist: {
                files: {
                    "dist/css/style.css" : "less/style.less"
                }
            }
        },
        image: {
            static: {
                options: {
                    optipng: false,
                    pngquant: true,
                    zopflipng: true,
                    jpegRecompress: false,
                    mozjpeg: true,
                    guetzli: false,
                    gifsicle: true,
                    svgo: true
                },
                files: {
                    
                    'dist/miniImages/MortenEvensen.jpg': 'images/MortenEvensen.jpg'
                    
                }
            },
            dynamic: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/'
            }]
        }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "dist/css/style.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: "./"
                }
            }
        },
        watch: {
            css: {
                files: "less/style.less",
                tasks: ["less", "image"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask("default", ["browserSync", "watch"]);
    
}