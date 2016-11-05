angular.module("Floweek").controller("competitionController", function($scope, levelsAPI) {

    $scope.levels = [];

    // -------------------------------------------------------------------------

    var loadLevels = function() {
        levelsAPI.getLevels().success(function(data) {
            $scope.levels = data;
        });
    };

    // -------------------------------------------------------------------------

    loadLevels();

});

