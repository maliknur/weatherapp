(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name weatherApp.directive:forecastIcon
     * @description
     *
     * The `forecastIcon` directive shows proper icon per weather condition
     *
     * @returns { Object } Return object {link, restrict: 'E'}
     */

    angular.module('weatherApp')
        .directive('forecastIcon', forecastIcon);

    function forecastIcon() {
        var directive = {
            restrict: 'E',
            scope: {
                icon: '@'
            },
            template: '<i class="wi wi-forecast-io-{{ icon }} {{icon}}"></i>'
        }

        return directive;
    }
})();
