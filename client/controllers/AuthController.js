myApp.controller('AuthController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    console.log('AuthController');
    $scope.signup = () => {
        return $http.post('/signup', $scope.user).then(function (response) {

            window.location.href='#!/';
        });
    };

    $scope.login = () => {
        return $http.post('/login', $scope.user).then(function (response) {

            window.location.href='#!/';
        });
    };
}]);
