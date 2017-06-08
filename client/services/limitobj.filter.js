var app=angular.module('typali');  
app.filter('limitobj', [function(){
    return function(obj, limit){
        if (typeof obj != 'object') {
            return [];
        }
        var keys = Object.keys(obj);
        if(keys.length < 1 || typeof keys == 'undefined'){
            return [];
        }

        var ret = new Object,
        count = 0;
        angular.forEach(keys, function(key, arrayIndex){
            if(count >= limit){
                return false;
            }
            ret[key] = obj[key];
            count++;
        });
        return ret;
    };
}]);