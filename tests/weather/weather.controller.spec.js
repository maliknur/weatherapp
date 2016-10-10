describe('WeatherController unit test: ', function() {
    'use strict';
    var controller, $scope, WeatherFactory;
    var defaultGeo = {
        latitude: 47.608013,
        longitude: -122.335167
    };

    beforeEach(module('weatherApp'));
    beforeEach(inject(function(_$rootScope_, _$controller_, _WeatherFactory_) {
        $scope = _$rootScope_.$new();
        WeatherFactory = _WeatherFactory_;
        controller = _$controller_('WeatherController', {
            $scope: $scope,
            WeatherFactory: _WeatherFactory_
        });
    }));

    describe('init method: ', function() {
        it('is defined', function() {
            expect(controller.init).toBeDefined();
        });
        it('initializes default city location', function() {
            expect(controller.address.city).toBe('Seattle');
        });
    });

    describe('getForecast method: ', function() {
        it('has not been called without init', function() {
            spyOn(controller, '_getForecast');
            expect(controller._getForecast).not.toHaveBeenCalled();
        });

        it('has been called by init method', function() {
            spyOn(controller, '_getForecast');
            controller.init();
            expect(controller._getForecast).toHaveBeenCalled();
            expect(controller._getForecast).toHaveBeenCalledWith(defaultGeo);
        });

        it('has been called by init with default geo location', function() {
            spyOn(controller, '_getForecast');
            controller.init();
            expect(controller._getForecast).toHaveBeenCalledWith(defaultGeo);
        });

        it('has been called by place_changed event fire', function() {
            spyOn(controller, '_getForecast');
            $scope.$broadcast('place_changed', ['Seattle',
                                                'Washington',
                                                'United States',
                                                47.6062095,
                                                -122.3320708]);
            spyOn($scope, '$broadcast').and.callThrough();
            expect(controller._getForecast).toHaveBeenCalled();
        });
    });

});
