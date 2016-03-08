// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope ,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  $scope.dishSearch = "";
  $scope.selectedDishes = Dinner.getSelectedDishes();
  $scope.searchedDishes = [];

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.searchDish = function() {
      console.log("hej" + $scope.dishSearch);
      var dishes = Dinner.DishSearch.get({title_kw: $scope.dishSearch} ,function() {
          $scope.searchedDishes = dishes.Results;
      });
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
      console.log("hahaha " + dish);
      Dinner.addDishToMenu(dish);
      console.log($scope.selectedDishes);
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
      var price = 0;
      console.log("är vi här?");
      if ($scope.selectedDishes === []) {
          return 0;
      }
      for (var i = $scope.selectedDishes.length - 1; i >= 0; i--) {
        //   for(var j = selectedDishes[i].Ingredients.length - 1; j >= 0; j--) {
        //       price += selectedDishes[i].Ingredients[j].Quantity;
        //   }
        price += $scope.selectedDishes[i].Price;
      }
      return price * $scope.numberOfGuests;
  }

  $scope.totalPrice = this.getTotalMenuPrice();
  
});
