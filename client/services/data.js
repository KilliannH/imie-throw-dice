'use strict';

myApp.service('DataService', function ($http) {

    let baseUrl = "http://localhost:3000";

    var DataService = this;

    DataService.getThrows = function () {

        return $http.get(baseUrl + '/api/throws');
    };

    return DataService;

});
