'use strict';

myApp.service('AuthenticationService', ['$http', '$rootScope',
        function ($http, $rootScope) {
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
            };

            service.clearCredentials = function () {
                $rootScope.globals = {};
                $http.defaults.headers.common.Authorization = 'Bearer ';
            };

            return service;
}]);
