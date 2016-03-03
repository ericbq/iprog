//DishView Object constructor
var OverviewView = function (container, model) {
	var selectedMenu = model.getFullMenu();

	this.loadView = function() {
		$("#overview-headline span").html( model.getNumberOfGuests() + " people");

		selectedMenu = model.getFullMenu();
		$lengthOfArray = selectedMenu.length;
		$totalPrice = model.getTotalMenuPrice();
		$.each(selectedMenu, function(index, dish) {

			$dishPrice = model.getDishPrice(dish) * model.getNumberOfGuests();
			//add vertical line to separate last course with total-price.
			if(index === ($lengthOfArray - 1)) {
				$("#selected-menu").append(
					"<div class=\"col-sm-3 dish-list last-dish\" id=\"selected-dish-" + dish.RecipeID + "\">" +
						"<div class=\"dish-header\">" +
							"<img src=\""+ dish.HeroPhotoUrl + "\">" +
							"<p>" + dish.Title + "</p>" +
						"</div>" +
						"<p class=\"price-text\">" + $dishPrice + " SEK </p>" +
					"</div>"
				);
			} else {

				$("#selected-menu").append(
					"<div class=\"col-sm-3 dish-list \" id=\"selected-dish-" + dish.RecipeID + "\">" +
						"<div class=\"dish-header\">" +
							"<img src=\"" + dish.HeroPhotoUrl + "\">" +
							"<p>" + dish.Title + "</p>" +
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

	$(document).ready(this.loadView());
}
