var app = angular.module('myModule');
app.controller('outputCtrl', function($scope, madlibFactory){
  $scope.madlib = madlibFactory.setOuput();
});
