angular.module("Floweek").directive("uiBestPlayerMissing", function($filter) {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            var _formatName = function(name) {

                name = name.replace(/[^a-zA-Z-]+/g, "");

                return name;

            };

            element.bind("keyup", function() {

                ngModel.$setViewValue(_formatName(ngModel.$viewValue));

                ngModel.$render();

            });
            
            // Pass value to scope only when size > 2

            ngModel.$parsers.push(function(value) {

                if (value.length > 2) {
                    return value;
                }

            });

        }
    };
});