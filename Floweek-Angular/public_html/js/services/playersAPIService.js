angular.module("Floweek").factory("playersAPI", function($http, config) {
    var _getTopScorers = function() {
        return $http.get(config.baseUrl + "/topScorers");
    };

    var _getBestPlayers = function() {
        return $http.get(config.baseUrl + "/bestPlayers");
    };

    var _postBestPlayerVote = function(selectedPlayer) {
        return $http.post(config.baseUrl + '/bestPlayerVote', selectedPlayer);
    };

    return {
        getTopScorers: _getTopScorers,
        getBestPlayers: _getBestPlayers,
        postBestPlayerVote: _postBestPlayerVote
    };
});