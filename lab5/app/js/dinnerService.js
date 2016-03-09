// Here we create an Angular service that we will use for our
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner', function ($resource, $cookieStore) {

  var numberOfGuest = 2;

  if(typeof $cookieStore.get('numberOfGuests') == undefined) {
      numberOfGuest = 2;
  } else {
      numberOfGuest = $cookieStore.get('numberOfGuests');
  }

  var selectedDishes = [];

  var selectedDishIds = [];
  var apiKey = 'r02x0R09O76JMCMc4nuM0PJXawUHpBUL';

  var DishFunction = this.Dish = $resource("http://api.bigoven.com/recipe/:id",
      {
          api_key: apiKey
      });

  if(typeof $cookieStore.get('selectedDishIds') == undefined) {
      selectedDishIds = [];
  } else {
      selectedDishIds = $cookieStore.get('selectedDishIds');
      angular.forEach(selectedDishIds, function (dish) {
          console.log("printing " + dish);
         DishFunction.get({id:dish}, function(result) {
              var activeDish = result;
              var dishPrice = 0;
              angular.forEach(activeDish.Ingredients, function(val){ dishPrice += val.Quantity; });
              activeDish.Price = dishPrice;
              selectedDishes.push(activeDish);
          }, function(err) {
              console.error(err);
          });

      })
  }



  this.updateCookie = function() {
      $cookieStore.put('numberOfGuests', numberOfGuest);
      $cookieStore.put('selectedDishIds', selectedDishIds);
  }

  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
    this.updateCookie();
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes)
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details



  this.setActiveDish = function(id) {
      activeDish = id;
  }

  this.getActiveDish = function() {
      return activeDish;
  }

  this.getSelectedDishes = function () {
      return selectedDishes;
  }

  this.addDishToMenu = function (dish) {
      selectedDishes.push(dish);
      selectedDishIds.push(dish.RecipeID);
      this.updateCookie();
  }

//EDIT THIS
this.DishSearch = $resource("http://api.bigoven.com/recipes",
    {
        pg:1,
        rpp:10,
        api_key: apiKey
    });



this.AllDishes = $resource("http://api.bigoven.com/recipes",
    {
        pg:1,
        rpp:10,
        api_key: apiKey
    });

  this.getRecipeJson = function (keyword) {
      var apiKey = api_key;
      var titleKeyword = keyword;
      var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="
                + titleKeyword
                + "&api_key="+apiKey;
      $.ajax({
          type: "GET",
          dataType: 'json',
          cache: false,
          url: url,
          success: function (data) {
              console.log(data);
              dishes = data.Results;
              $('#loading').css("display", "none");
          },
          error: function (err) {
              $('#loading').html("Something went wrong!");
          }
      });
  }

  this.getDishFromId = function (id) {
      var apiKey = api_key;
      var recipeID = id;
      console.log(recipeID);
      var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
      $.ajax({
           type: "GET",
           dataType: 'json',
           cache: false,
           url: url,
           success: function (data) {
              console.log(data);
              activeDish = data;
              $('#loading').css("display", "none");

          },
          error: function (err) {
              $('#loading').html("Something went wrong!");
          }
           });
  }

  this.getDishPrice = function(dish){
      $price = 0;
      if(dish !== undefined) {
          $.each(dish.Ingredients, function(index, object){
              $price += object.Quantity;
          });
      }
      return $price;
  }





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
