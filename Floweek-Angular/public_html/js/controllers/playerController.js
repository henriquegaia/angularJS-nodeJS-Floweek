angular.module("Floweek").controller("playerController", function($scope, $http, playersAPI) {

    $scope.players = [];

    // -------------------------------------------------------------------------

    $scope.sortByField = function(field) {
        $scope.sortType = field;
        $scope.sortReverse = !$scope.sortReverse;
    };

    // -------------------------------------------------------------------------

    $scope.getPlayerTotalGoals = function(p) {
        var sum;
        angular.forEach($scope.players, function(player, key) {
            if (p.name == player.name) {
                sum = 0;
                angular.forEach(player, function(playerValue, playerParam) {
                    if (playerParam == 'c20' || playerParam == 'c18') {
                        sum += parseInt(playerValue);
                    }
                });
            }
        });
        return sum;
    }

    // -------------------------------------------------------------------------

    $scope.getPlayerWeightedTotalGoals = function(playerName) {
        var sum;
        angular.forEach($scope.players, function(player, key) {
            if (playerName === player.name) {
                sum = 0;
                angular.forEach(player, function(playerValue, playerParam) {
                    switch (playerParam) {
                        case 'c20':
                            sum += parseInt(playerValue) * 20;
                            break;
                        case 'c18':
                            sum += parseInt(playerValue) * 18;
                            break;
                        default:
                            break;
                    }
                });
            }
        });
        return sum;
    }

    // -------------------------------------------------------------------------

    $scope.getPlayerGoalsByCode = function(player, code) {
        var val = '';
        angular.forEach($scope.players, function(p, key) {
            if (p.name == player.name) {
                switch (code) {
                    case 'c20':
                        val = p.c20;
                        break;
                    case 'c18':
                        val = p.c18;
                        break;
                    default:
                        break;
                }
            }
        });
        return val;
    };

    // -------------------------------------------------------------------------

    var loadPlayers = function() {
        playersAPI.getPlayers().success(function(data) {
            $scope.players = data;
        });
    };

    // -------------------------------------------------------------------------

    loadPlayers();

    // -------------------------------------------------------------------------

});