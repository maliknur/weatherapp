(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name weatherApp.factory:WeatherFactory
     * @requires $http
     * @requires $q
     * @description
     *
     * The `WeatherFactory` factory manages API calls to DarkSky API
     *
     * @returns { Object } Return object
     */

    angular
        .module('weatherApp')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http', '$q'];

    function WeatherFactory($http, $q) {
        var factory = {
            getForecast: getForecast
        };

        // should be hidden at backend but for prototype and simplicity used here.
        // change this api key to yours as this one will be disabled at time of your test
        var apiKey = '5f57ac0882dce7b0f4ca5af0d20a8bea';
        var apiUrl = 'https://api.darksky.net/forecast/'
        // to remove unnessary data
        var apiOptions = '?exclude=minutely,hourly,flags';
        var units = '&units=us';

        function getForecast(geoCode) {
            if (!geoCode || !geoCode.latitude || !geoCode.longitude) {
                return false;
            }
            var requestUrl = apiUrl + apiKey + '/' + geoCode.latitude + ',' + geoCode.longitude + apiOptions + units;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: requestUrl
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                deferred.reject('There was an error');
            });
            return deferred.promise;
        }
        return factory;
    }
})();
