describe('WeatherFactory unit test: ', function() {
    'use strict';

    var $httpBackend, $q, WeatherFactory, $scope;
    var defaultGeo = {
        latitude: 47.608013,
        longitude: -122.335167
    };

    beforeEach(module('weatherApp'));
    beforeEach(inject(function(_$rootScope_, _$httpBackend_, _$q_, _WeatherFactory_) {
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        WeatherFactory = _WeatherFactory_;

        var url = 'https://api.darksky.net/forecast/5f57ac0882dce7b0f4ca5af0d20a8bea/' +
                    '47.608013,-122.335167?exclude=minutely,hourly,flags&units=us';

        $httpBackend.when('GET', url)
                .respond({success: true});
    }));


    describe('getForecast method: ', function() {
        it('is defined', function() {
            expect(WeatherFactory.getForecast).toBeDefined();
        });

        it('returns a promise', function() {
            var result = WeatherFactory.getForecast(defaultGeo);
            expect(result instanceof $q).toBe(true);
        });

        it('returns result on success', function() {
            var res;
            WeatherFactory.getForecast(defaultGeo).then(function(result) {
                res = result;
            });
            $scope.$digest();
            $httpBackend.flush();
            expect(res.success).toBe(true);
        });

        it('returns false if invalid request', function() {
            var result;
            result = WeatherFactory.getForecast(null);
            expect(result).toBe(false);
        });
    });
});
