// public/js/controllers/PlotsPageCtrljs
angular.module('PlotsPageCtrl', []).controller('PlotsPageController', [ '$scope', function($scope, dataService) {

    $scope.tagline = 'To '; 

   /* dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });  */
	$scope.graphData = [
  {
    "Date": "01\/01\/2011",
    "Month": "Jan-11",
    "Owner": "Aperture",
    "Unit Sales": "1765"
  },
  {
    "Date": "02\/01\/2011",
    "Month": "Jan-11",
    "Owner": "Aperture",
    "Unit Sales": "1899"
  },
  {
    "Date": "02\/01\/2011",
    "Month": "Jan-11",
    "Owner": "Aperture",
    "Unit Sales": "1565"
  }
]
}]);

