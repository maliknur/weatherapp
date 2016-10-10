(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name weatherApp.directive:weatherMain
     * @description
     *
     * The `weatherMain` directive displays main jumbotron of page
     *
     * @returns { Object } Return object {link, restrict: 'E'}
     */

    angular.module('weatherApp')
        .directive('weatherMain', function () {
            return {
                restrict: 'E',
                templateUrl: '/views/weather-main.html'
            };
        });
})();
