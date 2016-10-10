(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name weatherApp.directive:forecastDay
     * @description
     *
     * The `forecastDay` directive creates single view from forecast-day.html
     *
     * @returns { Object } Return object {link, restrict: 'E'}
     */

    angular.module('weatherApp')
        .directive('forecastDay', function() {
            return {
                restrict: 'E',
                templateUrl: '/views/forecast-day.html',
            };
        });
})();
