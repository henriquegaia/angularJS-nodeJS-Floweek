angular.module("Floweek").controller("playerController", function($scope, playersAPI) {

    $scope.topScorers = [];
    $scope.bestPlayers = [];
    $scope.bestPlayerVotes = [];
    $scope.validFormVoteBestPlayer = false;
    $scope.errorOnLoadTopScorers = '';
    $scope.errorOnLoadBestPlayers = '';
    $scope.errorsOnLoadPlayerCtrl = false;

    // -------------------------------------------------------------------------

    $scope.sortByField = function(field) {
        $scope.sortType = field;
        $scope.sortReverse = !$scope.sortReverse;
    };

    // -------------------------------------------------------------------------

    $scope.validateFormVoteBestPlayer = function() {
        var val = $('#selBestPlayer').val();
        if (val == '' || val == null) {
            $scope.validFormVoteBestPlayer = false;
        } else {
            $scope.validFormVoteBestPlayer = true;
        }
    };

    // -------------------------------------------------------------------------

    $scope.bestPlayerVote = function(selectedPlayer) {
        playersAPI.postBestPlayerVote(selectedPlayer)
                .success(function(data) {
                    alert('post success');
                })
                .error(function() {
                    alert('post error');
                });
    };

    // -------------------------------------------------------------------------

    $scope.getPlayerTotalGoals = function(p) {
        var sum;
        angular.forEach($scope.topScorers, function(player, key) {
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
        angular.forEach($scope.topScorers, function(player, key) {
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
        angular.forEach($scope.topScorers, function(p, key) {
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

    var loadTopScorers = function() {
        playersAPI.getTopScorers()
                .success(function(data) {
                    $scope.topScorers = data;
                })
                .error(function() {
                    $scope.errorOnLoadTopScorers = 'An error ocurred while trying to load the top scorers!';
                    $scope.errorsOnLoadPlayerCtrl = true;
                });
    };

    // -------------------------------------------------------------------------

    var loadBestPlayers = function() {
        playersAPI.getBestPlayers()
                .success(function(data) {
                    $scope.bestPlayers = data;
                })
                .error(function() {
                    $scope.errorOnLoadBestPlayers = 'An error ocurred while trying to load the best players!';
                    $scope.errorsOnLoadPlayerCtrl = true;
                });
    };

    // -------------------------------------------------------------------------

    loadTopScorers();
    loadBestPlayers();

    // -------------------------------------------------------------------------

});