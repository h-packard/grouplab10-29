var app = angular.module('myModule');
app.controller('outputCtrl', function($scope, madlibFactory){
  $scope.bradyBunch = madlibFactory.setOuput();
  console.log($scope.madlibWord);
});
