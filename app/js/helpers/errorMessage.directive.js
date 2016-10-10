(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name weatherApp.directive:errorMessage
     * @description
     *
     * The `errorMessage` directive displays error dialog when DarkSky API fails
     *
     * @returns { Object } Return object {link, restrict: 'E'}
     */

    angular.module('weatherApp')
        .directive('errorMessage', function () {
            return {
                restrict: 'E',
                templateUrl: 'views/error-message.html'
            };
        });
})();
