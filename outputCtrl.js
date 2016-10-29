var app = angular.module('myModule');
app.controller('outputCtrl', function($scope, nameFactory){
  $scope.animal = namefactory.setOuput();
});
