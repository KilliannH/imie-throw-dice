var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);


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

myApp.run(['$rootScope', '$location', '$cookies', '$http',
    function ($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        console.log($rootScope.globals);
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.token;
        }
}]);
