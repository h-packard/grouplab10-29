var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, nameFactory){
  $scope.petName = function(animal) {
    $scope.animalName=animal;

    nameFactory.setInput($scope.animalName);
  }
})
