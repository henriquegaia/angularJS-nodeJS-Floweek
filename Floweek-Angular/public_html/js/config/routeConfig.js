angular.module("Floweek").config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "view/home/index.html",
        controller: "homeController"
    });
    $routeProvider.otherwise({redirectTo: "/"});
});

