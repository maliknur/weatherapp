(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name weatherApp.directive:spinner
     * @description
     *
     * The `spinner` directive displays loading spinner when app waits API response
     *
     * @returns { Object } Return object {link, restrict: 'E'}
     */

    angular.module('weatherApp')
        .directive('spinner', function () {
            return {
                restrict: 'E',
                templateUrl: '/views/spinner.html'
            };
        });
})();
