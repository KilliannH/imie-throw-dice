myApp.controller('ThrowsController', ['$scope', '$http', '$routeParams', 'DataService', 'AuthenticationService', '$route', '$location', function($scope, $http, $routeParams, DataService, AuthenticationService, $route, $location){

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
    }).catch((e) => {
        if(e.status === 401) {
            return $location.path('/login');
        }
    });

    $scope.createThrow = () => {
        if(!$scope.newThrow.nb_dices > 0 || !$scope.newThrow.nb_faces > 0) {
            return console.log(0);
        }

        let dicesface = [];
        for(let i = 0; i < $scope.newThrow.nb_dices; i++) {
            var min = 1;
            var max = $scope.newThrow.nb_faces + 1;

            var random = parseInt(Math.random() * (+max - +min) + +min);

            dicesface.push(random);
        }

        let result = 0;
        for(let i = 0; i < dicesface.length; i++) {
            result += dicesface[i];
        }

        $scope.newThrow.date = new Date(Date.now()).getTime();
        $scope.newThrow.result = result;
        $scope.newThrow.dices_face = dicesface;

        $scope.newThrow.thrown_by = AuthenticationService.getCurrentUser();

        return DataService.postThrow($scope.newThrow).then((res) => {
            console.log(res);
            if(res.status === 200) {
                return $route.reload();
            }
        });
    };

    $scope.deleteThrow = (id) => {
        return DataService.deleteThrow(id).then((res) => {
            if(res.status === 200) {
                return $route.reload();
            }
        });
    }

}]);
