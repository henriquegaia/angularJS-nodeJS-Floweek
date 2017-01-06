angular.module("Floweek").factory("errorInterceptor", function($q, $location) {

    return {
        responseError: function(rejection) {

            if (rejection.status === 0) {
                $location.path("/error");
            }

            return $q.reject(rejection);
        }
    };
});