angular.module("Floweek").controller("competitionController", function($scope, levelsAPI) {

    $scope.levels = [];
    $scope.errorOnLoadLevels = '';
    // -------------------------------------------------------------------------

    var loadLevels = function() {
        levelsAPI.getLevels()
                .success(function(data) {
                    $scope.levels = data;
                })
                .error(function() {
                    $scope.errorOnLoadLevels = 'An error ocurred while trying to load the competitions!';

                });
    };

    // -------------------------------------------------------------------------

    loadLevels();

});

