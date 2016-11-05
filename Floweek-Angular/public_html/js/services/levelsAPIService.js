angular.module("Floweek").service("levelsAPI", function($http, config) {
    this.getLevels = function() {
        return $http.get(config.baseUrl + "/levels");
    };
});