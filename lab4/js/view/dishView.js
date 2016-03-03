//DishView Object constructor
var DishView = function (container, model) {
	this.id = "";

	this.loadView = function() {
		this.id = model.getActiveDish();
		var dish = model.getDishFromId(this.RecipeID);
		console.log(dish);
		if(typeof dish !== 'undefined') {


		$("#dish-headline").html( dish.Title );
		$("#mid-left img").attr("src", dish.HeroPhotoUrl );
		$("#dish-instructions").html( 'Lorem ipsum dolor sit amet, pri eu insolens corrumpit. Mea an quem saperet consequat, at sit soleat postulant iracundia, quo putent efficiendi eu. Summo ridens epicuri ad mea, ei clita utroque propriae ius, mei ei animal nostrum. Te altera tritani repudiare est' );

		$dishPrice = 0;

		// $.each(dish.ingredients, function(arrayIndex, ingredient) {
		// 	$dishPrice += ingredient.price*4;
		// 	$("#ingredient-list").append(
		// 		"<tr><td>" + ingredient.quantity*4 + " " + ingredient.unit + "</td>" +
		// 		"<td>" + ingredient.name + "</td>" +
		// 		"<td> SEK </td>" +
		// 		"<td>" + ingredient.price*4  + "</td></tr>"
		// 	);
		// });

		$("#price-dish").html($dishPrice);
		}
	}
}
