(function() {
    'use strict';

        /**
         * @ngdoc directive
         * @name weatherApp.directive:navbar
         * @description
         *
         * The `navbar` directive displays input form to enter a location
         *
         * @returns { Object } Return object {link, restrict: 'E'}
         */

    angular.module('weatherApp')
        .directive('navbar', function () {
          return {
            restrict: 'E',
            templateUrl: 'views/navbar.html'
        };
    });
})();
