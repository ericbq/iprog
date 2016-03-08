// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope ,Dinner) {



  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  $scope.dishSearch = "";
  $scope.selectedDishes = Dinner.getSelectedDishes();
  $scope.searchedDishes = [];
  $scope.totalPrice;




  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
    $scope.getTotalMenuPrice();
  }

  $scope.getNumberOfGuests = function() {

    return Dinner.getNumberOfGuests();
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  $scope.getTotalMenuPrice = function() {
      var price = 0;
      if ($scope.selectedDishes === []) {
          $scope.totalPrice = 0;
      } else {
          for (var i = $scope.selectedDishes.length - 1; i >= 0; i--) {
            //   for(var j = selectedDishes[i].Ingredients.length - 1; j >= 0; j--) {
            //       price += selectedDishes[i].Ingredients[j].Quantity;
            //   }
            price += $scope.selectedDishes[i].Price;
          }
          $scope.totalPrice = price * $scope.getNumberOfGuests();
    }
  }
  $scope.getTotalMenuPrice();


  $scope.searchDish = function() {
      if ($scope.dishSearch == "") {
          var dishes = Dinner.AllDishes.get({}, function() {
              $scope.searchedDishes = dishes.Results;
          });
      } else {
          var dishes = Dinner.DishSearch.get({title_kw: $scope.dishSearch} ,function() {
              $scope.searchedDishes = dishes.Results;
          });
      }
  }
  $scope.searchDish();


  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
      Dinner.addDishToMenu(dish);
      console.log($scope.selectedDishes);
  }






});
