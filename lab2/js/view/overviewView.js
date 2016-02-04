//DishView Object constructor
var OverviewView = function (container, model, selectedMenu) {

	$(document).ready(function() {
		$("#overview-headline span").html( model.getNumberOfGuests() + " people");

		$totalPrice = 0;
		//model.getFullMenu();
		$.each(selectedMenu, function(index, dish) {
			$dishPrice = 0;

			$.each(dish.ingredients, function(i, o) {
				$dishPrice += o.price;
			});
			$totalPrice += $dishPrice;
			$("#selected-menu").append(
				"<div class=\"col-sm-3\" id=\"selectedDish" + dish.id + "\">" +
					"<div class=\"dish-header\">" +  
						"<img src=\"images/" + dish.image + "\">" +
						"<p>" + dish.name + "</p>" +
					"</div>" +
					"<p>" + $dishPrice + "</p>" +
				"</div>"
			);
		});

		$("#selected-menu").append(
			"<div class=\"col-sm-3\">" +
				"<p>Total<p>" +
				"<p>" + $totalPrice + "<p>" +
			"</div>"
		);


	});
}
 