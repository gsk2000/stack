// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/LandingPage.html',
            controller: 'LandingPageController'
        })

        // nerds page that will use the NerdController
        .when('/plots', {
            templateUrl: 'views/PlotPage.html',
            controller: 'PlotsPageController'
        });

    $locationProvider.html5Mode(true);

}]);