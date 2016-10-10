(function() {
    'use strict';

    /**
     * @ngdoc controller
     * @name weatherApp.controller:WeatherController
     * @requires $scope
     * @requires WeatherFactory
     * @description
     *
     * The `WeatherController` handles Google autocomplete response and makes DarkSky API call
     */

    angular
        .module('weatherApp')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$scope', 'WeatherFactory'];

    function WeatherController($scope, WeatherFactory) {
        var vm = this;
        vm.address = {};
        vm.gPlace;
        vm.chosenPlaceDetails;
        vm.forecast;
        vm.isFlipped = false;
        vm.error = false;
        vm.init = init;
        vm._getForecast = getForecast;

        vm.init();

        function init() {
            // Seattle geo location
            var defaultGeo = {
                latitude: 47.608013,
                longitude: -122.335167
            };
            vm._getForecast(defaultGeo);
            vm.address.city = 'Seattle';
            vm.address.other = 'Washington, United States';
        }

        function getForecast(geo) {
            WeatherFactory.getForecast(geo).then(function(data){
                data.daily.data.forEach(function(e) {
                    e['time'] = moment.unix(e['time']).format('dddd, M/D');
                });
                vm.forecast = data;
            }, function(error){
                vm.error = true;
            });
        }
        $scope.$on('place_changed', function(e, place) {
            var geo = {
                latitude: null,
                longitude: null
            };
            if (place) {
                geo.longitude = place.pop();
                geo.latitude = place.pop();
                vm.address.city = place.shift();
                vm.address.other = place.join(', ');
                vm._getForecast(geo);
            }
        });



    }
})();
