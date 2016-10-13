// public/js/services/PlotPageService.js
angular.module('PlotService', []).factory('dataService', ['$http', function($http) {

    return {
        getData: function() {
            return $http.get('/js/data.json');
        }
    }       

}]);