var app = angular.module('myModule')
app.factory('nameFactory', function() {
  var myObj = {};

  var setInput = function(animalName) {
    myobj.name = animalName;
  }
  var setOuput = function() {
    return myObj;
  }

  return {
    setInput: setInput,
    setOuput: setOuput
  };
});
