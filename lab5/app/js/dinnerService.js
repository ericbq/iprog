// Here we create an Angular service that we will use for our
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {

  var numberOfGuest = 2;
  var selectedDishes = [];


  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
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
      notifyObservers();
  }

  this.getActiveDish = function() {
      return activeDish;
  }





  this.getAllDishes = function (type,filter) {
      return dishes;
  }

  this.getDishes = function () {
      return dishes;
  }

//EDIT THIS
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
              notifyObservers();
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
              notifyObservers();
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
