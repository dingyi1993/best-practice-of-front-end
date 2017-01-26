define(['jquery'], function($) {
    var before = function() {};
    var after = function() {};

    return function(callback) {
        before();
        try {
            callback($);
        } catch (error) {
            console.error(error);
        }
        after();
    };
});
