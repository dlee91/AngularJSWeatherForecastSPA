/**
 * Created by dl87662 on 6/6/2016.
 */


///DIRECTIVES
weatherApp.directive("weatherReport", function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }


});