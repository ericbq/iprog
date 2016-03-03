var SelectionView = function (container, model) {
	this.loadView = function() {

		$("#numberOfGuests").val( model.getNumberOfGuests() );


		// if($searchValue == '') {
		// 	$dishArray = model.getAllDishes( $selectValue);
		// 	console.log($dishArray);
		// }else {
		// 	$dishArray = model.getRecipeJson( $searchValue );
		// 	console.log($dishArray);
		// }
		$dishArray = model.getDishes();

		$.each( $dishArray , function(index, object) {
			$("#mid-lower .container").append(
				"<div class=\"dish col-sm-15\" id=\"" + object.RecipeID + "\">" +
					"<div class=\"dish-header\">" +
						"<img src=\"" + object.HeroPhotoUrl + "\">" +
						"<p>" + object.Title + "</p>" +
					"</div>" +
					"<div class=\"dish-description\"><p>" + "Lorem ipsum dolor sit amet, pri eu insolens corrumpit. Mea an quem saperet consequat, at sit soleat postulant iracundia, quo putent efficiendi eu. Summo ridens epicuri ad mea, ei clita utroque propriae ius, mei ei animal nostrum. Te altera tritani repudiare est." + "</p> </div>" +
				"</div>");
		});

		$.each(model.getFullMenu(), function(index, object){
			$("#pendingRow").before(
				"<tr class=\"selectedDishRow\">" +
					"<td class=\"number-column\">" + object.RecipeID + "</td>" +
					"<td class=\"dish-column\">" + object.Title + "</td>" +
					"<td class=\"cost-column\">" + model.getDishPrice(object.RecipeID)*model.getNumberOfGuests() + "</td>" +
				"</tr>"
			);
		});

		$("#totalPrice span").html(
			"" + model.getTotalMenuPrice()
		);
	}
	$(document).ready(this.loadView());
}
