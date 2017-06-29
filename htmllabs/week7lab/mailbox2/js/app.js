//... Create your module

var MailBoxApp = angular.module("MailBoxApp",['ngRoute']);

MailBoxApp.config(["$routeProvider",function($routeProvider){
    
    $routeProvider
        .when("/inbox",{
            templateUrl:"views/home.html",
            controller:"HomeController"
        })
        
        .when("/inbox/:id",{
            templateUrl:"views/email.html",
            controller:"EmailController"
        }).otherwise({
            redirectTo:"/inbox"
        });
}]);