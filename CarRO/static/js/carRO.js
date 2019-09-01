(function () {
    'use strict';
    var carRO = angular.module('carRO', ['ngRoute', 'angularMoment']);

    carRO.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/board',{
                templateUrl: '/static/html/board.html',
                controller: 'boardController'
            })
            .when('/add',{
                templateUrl: '/static/html/add.html',
                controller: 'createController'
            })
            .when('/edit/:id',{
                templateUrl: '/static/html/edit.html',
                controller: 'updateController'
            })
            .otherwise({
                redirectTo: '/board'
            });

        $locationProvider.hashPrefix('');
    })

}());
