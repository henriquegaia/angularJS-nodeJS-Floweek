angular.module("Floweek").config(function($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "view/home/index.html",
        controller: "homeController"
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error/404.html"
    });

    $routeProvider.otherwise({
        redirectTo: "/"
    });
});

