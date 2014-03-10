// Create a namespace
var wdi = wdi || {};

// Creating module named demoApp
wdi.demoApp = angular.module("demoApp", []);

// def class SimpleController
// $scope glues together view and model in Angular.
wdi.SimpleController = function($scope){
// @welcome aka "instance variable"
  $scope.welcome = "Hello Folks!";

  $scope.names=['Steve', 'Ashley', 'Amanda', 'Graham', 'Amy', 'Joel', 'Calvin'];

  var minimum = 1000;
  $scope.myBalance = 1234.78;
  $scope.hasSufficientFunds = function() {
    return $scope.myBalance > minimum;
  };
};