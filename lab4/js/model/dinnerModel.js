//DinnerModel Object constructor
var DinnerModel = function() {

	var numberOfGuests = 3;
	var observerArray = [];
	var activeDish = "";
	var dishes = [];


	var selectedDishes = [];
	var api_key = 'H9n1zb6es492fj87OxDtZM9s5sb29rW3';


	//ajax request to access the BigOven API.
	this.syncRequest = function() {
		$.ajax( {
			type: 'GET',
			url:  'http://api.bigoven.com/recipes?api_key=' + api_key + '&pg=1&rpp=10',
			dataType: 'json',
			success: function(data) {
				dishes = data.Results;
				console.log(dishes);
				notifyObservers();
				$('#loading').css("display", "none");
				
			},
			error: function(xhr, status, error) {
				$('#loading').html("Something went wrong!");
				console.error(error);
			}
		})
	}

	this.setActiveDish = function(id) {
		activeDish = id;
		notifyObservers();
	}

	this.getActiveDish = function() {
		return activeDish;
	}


	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		notifyObservers(numberOfGuests);
	}

	// should return
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		for (var i = selectedDishes.length - 1; i >= 0; i--) {
			if(selectedDishes[i].type == type) {
				return selectedDishes[i];
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredients = [];
		for (var i = selectedDishes.length - 1; i >= 0; i--) {
			for (var j = selectedDishes[i].ingredients.length - 1; j >= 0; j--) {
				ingredients.push(selectedDishes[i].ingredients[j]);
			};
		};
		return ingredients;
	}

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

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(dish) {
		// var selectedDish = this.getDish(id);
		// for (var i = selectedDishes.length - 1; i >= 0; i--) {
		// 	if(selectedDishes[i].type == selectedDish.type) {
		// 		selectedDishes[i] = selectedDish;
		// 		notifyObservers(selectedDishes);
		// 		return;
		// 	}
		// }
		selectedDishes.push(dish);
		notifyObservers(selectedDishes);
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for (var i = selectedDishes.length - 1; i >= 0; i--) {
			if(selectedDishes[i] == this.getDish(id)) {
				selectedDishes[i].splice(i, 1);
			}
		}
		notifyObservers(selectedDishes);
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
		console.log("get all dishes" + this.dishes);
		return dishes;
	//   return $(this.dishes).filter(function(index,dish) {
	// 	var found = true;
		// if(filter){
		// 	found = false;
		// 	$.each(dish.ingredients,function(index,ingredient) {
		// 		if(ingredient.name.indexOf(filter)!=-1) {
		// 			found = true;
		// 		}
		// 	});
		// 	if(dish.name.indexOf(filter) != -1)
		// 	{
		// 		found = true;
		// 	}
		// }
	//   	return dish.type == type && found;
	//   });
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		 // $.each(this.dishes, function(key, dish) {
		 // 	if(dish.id == id) {
		 // 		console.log(dish);
		 // 		return dish;
		 // 	}
		 // });


	 if (dishes == null) {
	 	return;
	 }
	  for(key=0; key < dishes.length; key++){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
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

	this.getDishes = function () {
		return dishes;
	}

	//Returns the price of the specific dish
	this.getDishPrice = function(dish){
		$price = 0;
		if(dish !== undefined) {
			$.each(dish.Ingredients, function(index, object){
				$price += object.Quantity;
			});
		}
		return $price;
	}

	//Add observer to the observer array
	this.addObserver = function(observer) {
		observerArray.push(observer);
	}

	//Update all observers
	var notifyObservers = function(obj){
		$.each(observerArray, function(index, object){
			if(typeof obj === 'undefined'){
				object.update(numberOfGuests, selectedDishes, activeDish, dishes);
			} else {
				object.update(obj);
			}
		});
	}




	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.

}
