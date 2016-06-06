/**
 * Created by dl87662 on 6/6/2016.
 */

//controllers****************************************************************
weatherApp.controller('homeController', ['$scope', 'cityService',
    function($scope, cityService){

        $scope.city = cityService.city;

        $scope.$watch('city', function(){
            cityService.city = $scope.city;
        });



    }]);

weatherApp.controller('forecastController',['$scope', '$resource' ,'$routeParams','cityService',
    function ($scope, $resource, $routeParam, cityService){

        $scope.city = cityService.city;

        $scope.days = $routeParam.days || '2';


        $scope.weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5e124021aecd90602c773fd9c8eb2795" , {
                callback: "JSON_CALLBACK"}, {get: { method: "JSONP"}});

        $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days });

        $scope.convertToFahrenheit = function(degK){

            return Math.round((1.8 * (degK - 273)) + 32);
        }

        $scope.convertToDate = function(dt) {

            return new Date(dt*1000);

        };

    }]);