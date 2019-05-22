'use strict';

myApp.service('DataService', function ($http) {

    let baseUrl = "http://localhost:3000";

    var DataService = this;

    DataService.getThrows = function () {

        return $http.get(baseUrl + '/api/throws');
    };

    DataService.getThrow = function (id) {

        return $http.get(baseUrl + '/api/throws/' + id);
    };

    DataService.postThrow = function (newThrow) {

        return $http.post(baseUrl + '/api/throws', newThrow);
    };

    DataService.deleteThrow = function (id) {
        return $http.delete(baseUrl + '/api/throws/' + id);
    };

    return DataService;

});
