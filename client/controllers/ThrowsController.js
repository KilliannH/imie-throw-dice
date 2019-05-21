myApp.controller('ThrowsController', ['$scope', '$http', '$routeParams', 'DataService', function($scope, $http, $routeParams, DataService){

    $scope.throws = [];

    DataService.getThrows().then((res) => {
        if(res.status === 200) {
            return $scope.throws = res.data;
        }
    });

}]);
