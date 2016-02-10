//DishView Object constructor
var OverviewView = function (container, model) {
	var selectedMenu = model.getFullMenu();

	var update = function(arg1, arg2) {
		if(arg2 === undefined) {
			if( typeof arg1 === 'number') {
				model.setNumberOfGuests(arg1);
			} else {
				model.selectedDishes = arg1;
			}
		} else {
			model.setNumberOfGuests(arg1);
			model.selectedDishes = arg2;
		}
		$("#selected-menu").html("");
		loadView();
	}

	$(document).ready(loadView);

	var loadView = function() {
		$("#overview-headline span").html( model.getNumberOfGuests() + " people");

		$totalPrice = 0;
		$lengthOfArray = selectedMenu.length;
		//model.getFullMenu();
		$.each(selectedMenu, function(index, dish) {
			$dishPrice = 0;



			$.each(dish.ingredients, function(i, o) {
				$dishPrice += o.price;
			});

			$totalPrice += $dishPrice;

			//add vertical line to separate last course with total-price.
			if(index === ($lengthOfArray - 1)) {
				$("#selected-menu").append(
					"<div class=\"col-sm-3 dish-list last-dish\" id=\"selected-dish-" + dish.id + "\">" +
						"<div class=\"dish-header\">" +  
							"<img src=\"images/" + dish.image + "\">" +
							"<p>" + dish.name + "</p>" +
						"</div>" +
						"<p class=\"price-text\">" + $dishPrice + " SEK </p>" +
					"</div>"
				);
			} else {

				$("#selected-menu").append(
					"<div class=\"col-sm-3 dish-list \" id=\"selected-dish-" + dish.id + "\">" +
						"<div class=\"dish-header\">" +  
							"<img src=\"images/" + dish.image + "\">" +
							"<p>" + dish.name + "</p>" +
						"</div>" +
						"<p class=\"price-text\">" + $dishPrice + " SEK </p>" +
					"</div>"
				);
			}
		});

		$("#selected-menu").append(
			"<div id=\"total-price\">" +
				"<p>Total:<p>" +
				"<p class=\"price-text\">" + $totalPrice + " SEK<p>" +
			"</div>"
		);
	}
}
 