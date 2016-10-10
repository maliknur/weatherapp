(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name weatherApp
     * @description
     *
     * # weatherApp Module
     *
     * The `weatherApp` module defines the weather app functionality.
     * redirect any url to main root one
     *
     */

    angular.module('weatherApp', ['ui.router'])
        .config(configSetup);

    configSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configSetup($stateProvider, $urlRouterProvider) {
        // For blank url, redirect to /
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '',
                templateUrl: 'index.html',
                controller: 'WeatherController',
                controllerAs: 'wc'
            });
    }
})();
