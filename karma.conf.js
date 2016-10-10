module.exports = function(config) {
    config.set({
        basePath: "",

        frameworks: ['jasmine'],


        files: [
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-mocks.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js",

            "app/js/app.js",
            "app/js/**/*.js",

            "tests/**/*.spec.js"
        ],

        exclude: [ ],


        preprocessors: { },


        reporters: ["spec"],


        port: 9876,


        colors: true,


        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        browsers: ["PhantomJS"],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
}
