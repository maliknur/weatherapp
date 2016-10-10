(function() {
    'use strict';
    /**
     * @ngdoc directive
     * @name weatherApp.directive:googleplace
     * @requires $rootScope
     * @description
     *
     * The `googleplace` directive enables Google Autocomplete API
     *
     * @returns { Object } Return object {link, restrict: 'A'}
     */

    angular.module('weatherApp')
        .directive('googleplace', googleplaceDirective);
        googleplaceDirective.$inject = ['$rootScope'];

        function googleplaceDirective($rootScope) {
            return {
                require: 'ngModel',
                restrict: 'A',
                scope: {
                    ngModel: '=',
                    details: '=?'
                },
                link: autocompleteLink
            }

            function autocompleteLink(scope, element, attrs, model) {
                var options = {
                    types: [],
                    componentRestrictions: {}
                };
                scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

                // ref. from gist https://gist.github.com/VictorBjelkholm/6687484
                google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                    scope.$apply(function() {
                        scope.details = scope.gPlace.getPlace();

                        var addressComponents = scope.details.address_components;
                        var latitude = scope.details.geometry.location.lat();
                        var longitude = scope.details.geometry.location.lng();

                        addressComponents = addressComponents.filter(function(component){
                            switch (component.types[0]) {
                                case "locality":
                                    return true;
                                case "administrative_area_level_1":
                                    return true;
                                case "country":
                                    return true;
                                default:
                                    return false;
                            }
                        }).map(function(obj) {
                            return obj.long_name;
                        });
                        addressComponents.push(latitude, longitude);
                        model.$setViewValue(element.val());
                        $rootScope.$broadcast('place_changed', addressComponents);
                    });
                });
            };
        }
})();
