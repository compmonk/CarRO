(function () {
    'use strict';
    angular.module('carRO').controller('createController', ['$scope', '$http', '$location', createController]);

    function createController($scope, $http, $location) {
        $scope.add = function () {
            $http.post('/repair/', $scope.repairOrder).then(
                function (response) {
                    console.log(response);
                    $location.path('#/board')
                },
                function () {
                    console.log("Could not add repair orders")
                }
            );
        }
    }
}());
