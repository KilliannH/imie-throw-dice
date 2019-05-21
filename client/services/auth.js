'use strict';

myApp.service('AuthenticationService', ['$http', '$cookies', '$rootScope',
        function ($http, $cookies, $rootScope) {
            var service = {};

            service.login = function (email, password) {

                return $http.post('/api/users/login', { email: email, password: password })

            };

            service.setCredentials = function (email, token) {
                $rootScope.globals = {
                    currentUser: {
                        email: email,
                        token: token
                    }
                };

                $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                $cookies.putObject('globals', $rootScope.globals);
            };

            service.clearCredentials = function () {
                $rootScope.globals = {};
                $http.defaults.headers.common.Authorization = 'Bearer ';
                $cookies.remove('globals');
            };

            return service;
}]);
