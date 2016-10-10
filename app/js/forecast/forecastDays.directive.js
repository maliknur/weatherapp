(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name weatherApp.directive:forecastDays
     * @description
     *
     * The `forecastDays` directive handles list of forecast days with forecast-days.html
     *
     * @returns { Object } Return object {link, restrict: 'E'}
     */

    angular.module('weatherApp')
        .directive('forecastDays', function() {
            return {
                restrict: 'E',
                templateUrl: 'views/forecast-days.html'
            };
        });
})();
