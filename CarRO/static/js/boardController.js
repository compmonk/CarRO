(function () {
    'use strict';
    angular.module('carRO').controller('boardController', ['$scope', '$http', 'moment', '$location', boardController]);

    function boardController($scope, $http, moment, $location) {
        $http.get('/repair/').then(
            function (response) {
                $scope.repairOrders = response.data;
                $scope.repairOrders.map(ro => (
                    ro.date = moment(ro.date).format("YYYY-MM-DD HH:mm")
                ));
                $scope.repairOrders.map(ro => (
                    ro.vehicleName = ro.vehicle.make + " " + ro.vehicle.model
                ));
            },
            function () {
                console.log("Could not get repair orders")
            }
        );

        $scope.getRepairOrder = function (repairOrder) {
            $location.path('edit/' + repairOrder.id);
        };

    }

}());
