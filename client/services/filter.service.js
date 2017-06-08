var app=angular.module('typali');        
app.filter('filterByProperty',['$filter', function ($filter) {
    /* array is first argument, each addiitonal argument is prefixed by a ":" in filter markup*/
    return function (dataArray, searchTerm, propertyName) {
        console.log("reached here", searchTerm, propertyName);
        if (!dataArray) return;
        /* when term is cleared, return full array*/
        if (!searchTerm) {
            return dataArray
        } else if (propertyName === "$") {
            return $filter('filter')(dataArray, searchTerm)
        }
        else {
            /* otherwise filter the array */
            console.log(searchTerm);
            var term = searchTerm.toString().toLowerCase();
            return dataArray.filter(function (item) {
                return item[propertyName].toString().toLowerCase().indexOf(term) > -1;
            });
        }
    }
}]);