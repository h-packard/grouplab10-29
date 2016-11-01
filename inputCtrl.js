var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, madlibFactory){
  $scope.madlib = function(madlibWord) {
    $scope.bradyBunch=madlibWord;
    madlibFactory.setInput($scope.bradyBunch);
    console.log(madlibWord);
  }
})
