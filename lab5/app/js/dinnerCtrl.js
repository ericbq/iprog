// Dinner controller that we use whenever we have view that needs to
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
      var price = 0;
      if (selectedDishes == []) {
          return 0;
      }
      for (var i = selectedDishes.length - 1; i >= 0; i--) {
          for(var j = selectedDishes[i].Ingredients.length - 1; j >= 0; j--) {
              price += selectedDishes[i].Ingredients[j].Quantity;
          }
      }
      return price * numberOfGuests;
  }

  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
      selectedDishes.push(dish);
  }
});
