var app = angular.module('myModule')
app.factory('madlibFactory', function() {
  var myObj = {
    adj1:'',
    no1:'',
    adj2:'',
    clr1:'',
    noun1:'',
    name1:'',
    no2:'',
    no3:'',
    verb1:'',
    noun2:'',
    verb2:'',
    verb3:''
  };

  var setInput = function(bradyBunch) {
    myObj = bradyBunch;
  }
  var setOuput = function() {
    return myObj;
  }

  return {
    setInput: setInput,
    setOuput: setOuput
  };
});
