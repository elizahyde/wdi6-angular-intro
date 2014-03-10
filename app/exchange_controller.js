
wdi.ExchangeController = function($scope) {
  $scope.convert = function( euros ) {

    $scope.dollars = $scope.euros * 1.35;
  };

  $scope.$watch('euros', function(newValue, oldValue){
    $scope.isNumber = !isNaN(newValue);
  });
};