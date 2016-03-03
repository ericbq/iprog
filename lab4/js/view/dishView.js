//DishView Object constructor
var DishView = function (container, model) {
	this.currentDish = "";

	this.loadView = function() {
		console.log(this.currentDish);
		if(this.currentDish !== '') {

		$("#dish-headline").html( this.currentDish.Title );
		$("#mid-left img").attr("src", this.currentDish.HeroPhotoUrl );
		$("#dish-instructions").html( this.currentDish.Description );

		$dishPrice = 0;

		$.each(this.currentDish.Ingredients, function(arrayIndex, ingredient) {
			$dishPrice += ingredient.Quantity*4;
			$("#ingredient-list").append(
				"<tr><td>" + ingredient.Quantity*4 + " " + ingredient.Unit + "</td>" +
				"<td>" + ingredient.Name + "</td>" +
				"<td> SEK </td>" +
				"<td>" + ingredient.Quantity*4  + "</td></tr>"
			);
		});

		$("#price-dish").html($dishPrice);
		}
	}
}
