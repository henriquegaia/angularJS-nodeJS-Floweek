angular.module("Floweek").directive("uiAccordions", function() {
    return {
        controller: function() {

            var accordions = [];

            this.registerAccordion = function(accordion) {
                accordions.push(accordion);
            };

            this.closeAll = function() {

                accordions.forEach(function(accordion) {
                    accordion.isOpened = false;
                });
            };
        }
    };
});

angular.module("Floweek").directive("uiAccordion", function() {

    return {
        templateUrl: "view/home/partials/accordion.html",
        transclude: true,
        scope: {
            title: "@",
            content: "@",
        },
        require: "^uiAccordions",
        link: function(scope, elements, attrs, ctrl) {

            ctrl.registerAccordion(scope);

            scope.open = function() {

                if (scope.isOpened) {
                    scope.isOpened = false;
                    return;
                }

                ctrl.closeAll();

                scope.isOpened = !scope.isOpened;

            };

        }

    };

});