angular.module("Floweek").config(function($httpProvider){
    
    $httpProvider.interceptors.push("timestampInterceptor");
    
    console.log($httpProvider);
    
});