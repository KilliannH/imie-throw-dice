myApp.controller('AuthController', ['$scope', '$http', 'AuthenticationService', '$location', function($scope, $http, AuthenticationService, $location){
    console.log('AuthController');

    $scope.login = () => {
        return AuthenticationService.login($scope.email, $scope.password).then((res) => {
            console.log(res);
            if(res.status === 200) {
                let token = res.data.token;
                AuthenticationService.setCredentials($scope.email, token);
                $location.path('/');
            }
        });
    };
}]);
