myApp.controller('ThrowsController', ['$scope', '$http', '$routeParams', 'DataService', function($scope, $http, $routeParams, DataService){

    $scope.newThrow = {
        nb_dices: 0,
        nb_faces: 0,
        date: null,
        result: null,
        dices_face: []
    };

    $scope.throws = [];

    DataService.getThrows().then((res) => {
        if(res.status === 200) {
            return $scope.throws = res.data;
        }
    });

}]);
