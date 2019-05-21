var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'views/throws.html',
            controller: 'ThrowsController'
        })
        .when('/details/:id', {
            templateUrl: 'views/throwDetails.html',
            controller: 'ThrowDetailsController'
        })
        .when('/add', {
            templateUrl: 'views/addThrow.html',
            controller: 'CrudThrowController'
        })
        .when('/edit/:id', {
            templateUrl: 'views/editThrow.html',
            controller: 'CrudThrowController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })
        .otherwise({
            redirecTo: '/'
        });
}]);
