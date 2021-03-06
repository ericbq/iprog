//DishView Object constructor
var DishView = function (container, model, dish) {

	$(document).ready(function() {
		$("#numberOfGuests").val( model.getNumberOfGuests() );

		$("#dish-headline").html( dish.name );
		$("#mid-left img").attr("src", "images/" + dish.image );
		$("#dish-instructions").html( dish.description );
		
		$dishPrice = 0;

		$.each(dish.ingredients, function(arrayIndex, ingredient) {
			$dishPrice += ingredient.price*4;
			$("#ingredient-list").append(
				"<tr><td>" + ingredient.quantity*4 + " " + ingredient.unit + "</td>" +
				"<td>" + ingredient.name + "</td>" +
				"<td> SEK </td>" +
				"<td>" + ingredient.price*4  + "</td></tr>"
			);
		});

		$("#price-dish").html($dishPrice);
	 });


	$("#numberOfGuests").keyup(function() {
		model.setNumberOfGuests( $this.val() );
	});

}
 