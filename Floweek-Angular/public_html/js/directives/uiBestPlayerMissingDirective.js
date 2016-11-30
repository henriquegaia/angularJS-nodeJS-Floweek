angular.module("Floweek").directive("uiBestPlayerMissing", function() {
    return {
        
        require: "ngModel",
        
        link: function(scope, element, attrs, ngModel) {
            
            var _formatName = function(name){
              
                name = name.replace(/[^\w]+/g, "");
                
                return name;
                
            };

            element.bind("keyup", function() {
                
                ngModel.$setViewValue(_formatName(ngModel.$viewValue));
                
                ngModel.$render();
                
            });
        }
    };
});