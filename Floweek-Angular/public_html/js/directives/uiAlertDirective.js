angular.module("Floweek").directive("uiAlert", function() {
    return {
        templateUrl: "view/home/partials/alert.html",
        restrict: "AE",
        scope: {
            title: "@",
            message: "@",
        }, 
    };
});