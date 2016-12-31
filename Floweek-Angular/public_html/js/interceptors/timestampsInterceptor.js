angular.module("Floweek").factory("timestampInterceptor", function() {

    return {
        request: function(config) {
            console.log(config.url);
            return config;
        }
    };
});
