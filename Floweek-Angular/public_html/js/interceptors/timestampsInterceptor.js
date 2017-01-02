angular.module("Floweek").factory("timestampInterceptor", function() {

    return {
        
        request: function(config) {

            var url = config.url;

            if (url.indexOf('view') > -1) {
                return config;
            }

            var time = new Date().getTime();

            var newUrl = config.url + '?timestamps=' + time;
            
            console.log(newUrl);
            
            return config;
        }
    };
});
