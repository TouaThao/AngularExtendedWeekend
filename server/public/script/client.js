const app = angular.module('petHotelApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/pets', {
            templateUrl: '/view/petHotel.html',
            controller: 'petController as vm'
        })
        .when('/owner', {
            templateUrl: '/view/owner.html',
            controller: 'ownerController as vm'
        })
        .otherwise({
            templateUrl: '/view/404.html'
        })
});