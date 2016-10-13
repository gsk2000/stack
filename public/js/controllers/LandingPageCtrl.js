// public/js/controllers/landingpagectrl.js
angular.module('LandingPageCtrl', ['angular-dimple']).controller('LandingPageController', function($scope, $http) {
$scope.palette = [
    {
      name: "Messages/User", // Required, name of field to assign
      fill: "#FFBEB4",   // Requried, fill color
    stroke: "#FFBEB4", // Optional, stroke color
    opacity: "1"       // Optional, opacity
    },
    {
      name: "Messages/Month",
      fill: "#7B9ACC",
    stroke: "#7B9ACC",
    opacity: "1"
    },
    {
      name: "Messages/Week",
      fill: "#D1FFA9",
    stroke: "#D1FFA9",
    opacity: "1"
    }
  ];
   // $scope.tagline = 'To the moon and back!';   
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

 $http.get('/api/chatTotalCount')
        .success(function(data) {
            $scope.chatcount = data;
            $scope.avgperweek = Math.round($scope.chatcount / 12);
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
 $http.get('/api/numUserCount')
        .success(function(ucc) {
            $scope.unqusercount = ucc;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + ucc);
        });  
  $http.get('/api/msgpermonth')
        .success(function(msgmnth) {
            $scope.msgmonth = msgmnth;
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + msgmnth);
        }); 
   $http.get('/api/msgperweek')
        .success(function(msgweek) {
            $scope.msgday = msgweek
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + msgweek);
        });        
$http.get('/api/msgperuser')
        .success(function(msgperurs) {
            $scope.msgperurs = msgperurs;
            $scope.palette = [
    {
      name: "Messages/User", // Required, name of field to assign
      fill: "#FFBEB4",   // Requried, fill color
    stroke: "#FFBEB4", // Optional, stroke color
    opacity: "1"       // Optional, opacity
    },
    {
      name: "Messages/Month",
      fill: "#7B9ACC",
    stroke: "#7B9ACC",
    opacity: "1"
    },
    {
      name: "Messages/Week",
      fill: "#D1FFA9",
    stroke: "#D1FFA9",
    opacity: "1"
    }
  ];
            //console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + msgperurs);
        });   

});
