//...

var CalenderApp = angular.module("CalenderApp",["ngRoute"]);

CalenderApp.config(["$routeProvider",function($routeProvider){
    
    $routeProvider
        .when("/",{
            templateUrl:"views/day.html",
            controller:"DayController"
        })
        .otherwise({
            redirectTo:"/"
        });
}]);