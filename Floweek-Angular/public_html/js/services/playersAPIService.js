angular.module("Floweek").service("playersAPI", function($http, config) {
    this.getPlayers = function() {
        return $http.get(config.baseUrl + "/players");
    };
});