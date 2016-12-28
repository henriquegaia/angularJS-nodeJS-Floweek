angular.module("Floweek").controller("homeController", function($scope, playersAPI, levelsAPI) {

    $scope.topScorers = [];
    $scope.bestPlayers = [];
    $scope.bestPlayerVotes = [];
    $scope.levels = [];
    $scope.validFormVoteBestPlayer = false;
    $scope.errorOnLoadTopScorers = '';
    $scope.errorOnLoadBestPlayers = '';
    $scope.errorsOnLoadHomeCtrl = false;
    $scope.errorOnLoadLevels = '';

    // -------------------------------------------------------------------------

    $scope.N_LEVELS = 10;
    $scope.FIRST_LEVEL = 0;
    $scope.LEVEL_CODE_PREPEND = 'c_';

    // -------------------------------------------------------------------------

    $scope.sortByField = function(field) {
        $scope.sortType = field;
        $scope.sortReverse = !$scope.sortReverse;
    };

    // -------------------------------------------------------------------------

    $scope.validateFormVoteBestPlayer = function() {
        var val = $('#selBestPlayer').val();
        if (!val) {
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
            if (p.name === player.name) {
                sum = 0;
                angular.forEach(player, function(playerValue, playerParam) {
                    for (var i = $scope.FIRST_LEVEL; i <= $scope.N_LEVELS; i++) {
                        if (playerParam === $scope.LEVEL_CODE_PREPEND + i) {
                            return sum += parseInt(playerValue);
                        }
                    }
                });
            }
        });
        return sum;
    };

    // -------------------------------------------------------------------------

    $scope.getPlayerWeightedTotalGoals = function(playerName) {
        var sum;

        angular.forEach($scope.topScorers, function(player, key) {
            if (playerName === player.name) {
                sum = 0;
                angular.forEach(player, function(playerValue, playerParam) {

                    for (var i = $scope.FIRST_LEVEL; i <= $scope.N_LEVELS - 1; i++) {

                        var weight = -1;

                        var code = $scope.LEVEL_CODE_PREPEND + i;

                        if ($scope.levels[i].hasOwnProperty('code')) {
                            weight = $scope.levels[i].weight;
                        }

                        if (playerParam === code) {
                            sum += parseInt(playerValue) * weight;
                        }
                    }
                });
            }
        });
        return sum;
    };

    // -------------------------------------------------------------------------

    $scope.getPlayerGoalsByCode = function(player, code) {
        var val = '';
        angular.forEach($scope.topScorers, function(p, key) {
            if (p.name === player.name) {
                switch (code) {
                    case 'c_0':
                        val = p.c_0;
                        break;
                    case 'c_1':
                        val = p.c_1;
                        break;
                    case 'c_2':
                        val = p.c_2;
                        break;
                    case 'c_3':
                        val = p.c_3;
                        break;
                    case 'c_4':
                        val = p.c_4;
                        break;
                    case 'c_5':
                        val = p.c_5;
                        break;
                    case 'c_6':
                        val = p.c_6;
                        break;
                    case 'c_7':
                        val = p.c_7;
                        break;
                    case 'c_8':
                        val = p.c_8;
                        break;
                    case 'c_9':
                        val = p.c_9;
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
                    $scope.errorsOnLoadHomeCtrl = true;
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
                    $scope.errorsOnLoadHomeCtrl = true;
                });
    };

    // -------------------------------------------------------------------------

    var loadLevels = function() {
        levelsAPI.getLevels()
                .success(function(data) {
                    $scope.levels = data;
                })
                .error(function() {
                    $scope.errorOnLoadLevels = 'An error ocurred while trying to load the competitions!';
                    $scope.errorsOnLoadHomeCtrl = true;
                });
    };

    // -------------------------------------------------------------------------

    loadTopScorers();
    loadBestPlayers();
    loadLevels();

});
