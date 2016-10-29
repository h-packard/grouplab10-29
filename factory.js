var app = angular.module('myModule')
app.factory('madlibFactory', function() {
  var myObj = {};

  var setInput = function(bradyBunch) {
    myobj.name = bradyBunch;
  }
  var setOuput = function() {
    return myObj;
  }

  return {
    setInput: setInput,
    setOuput: setOuput
  };
});
