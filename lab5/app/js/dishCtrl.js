// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {

  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  $scope.activeDish = "";
  $scope.dishPrice = 0;
  $scope.status = "loading";

  Dinner.Dish.get({id:$routeParams.dishId}, function(result) {
      $scope.activeDish = result;
      angular.forEach($scope.activeDish.Ingredients, function(val){ $scope.dishPrice += val.Quantity; });
      $scope.activeDish.Price = $scope.dishPrice;
      $scope.status = "";
  }, function(err) {
      console.error(err);
      $scope.status = "something went wrong!!!";
  });



});
