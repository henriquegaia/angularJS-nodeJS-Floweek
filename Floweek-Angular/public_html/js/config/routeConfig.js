angular.module("Floweek").config(function ($routeProvider){
	$routeProvider.when("/",{
		templateUrl: "view/home.html"
	});
	$routeProvider.otherwise({redirectTo: "/"});
});

