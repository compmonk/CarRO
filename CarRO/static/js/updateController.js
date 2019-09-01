(function () {
    'use strict';
    angular.module('carRO').controller('updateController', ['$scope', '$http', '$routeParams', '$location', 'moment', updateController]);

    function updateController($scope, $http, $routeParams, $location, moment) {
        $http.get('/repair/' + $routeParams.id).then(
            function (response) {
                $scope.repairOrder = response.data;
                $scope.repairOrder.date = moment($scope.repairOrder.date).format("YYYY-MM-DD HH:mm")
            },
            function () {
                console.log("Could not get repair orders")
            }
        );

        $scope.edit = function () {
            $http.put('/repair/' + $scope.repairOrder.id, $scope.repairOrder).then(
                function (response) {
                    console.log(response);
                    $location.path('#/board')
                },
                function () {
                    console.log("Could not add repair orders")
                }
            );
        };

        $scope.delete = function () {
            $http.delete('/repair/' + $scope.repairOrder.id).then(
                function (response) {
                    console.log(response);
                    $location.path('#/board')
                },
                function () {
                    console.log("Could not add repair orders")
                }
            );
        };
    }
}());
