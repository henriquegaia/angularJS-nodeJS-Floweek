angular.module("Floweek").directive("uiAlert", function() {
    return {
        templateUrl: "view/alert.html",
        restrict: "AE",
        scope: {
            title: "@",
            message: "@",
        }, 
    };
});