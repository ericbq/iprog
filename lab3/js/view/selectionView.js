var SelectionView = function (container, model) {

	this.loadView = function() {
		$("#numberOfGuests").val( model.getNumberOfGuests() );

		$selectValue = $("#mid-upper select").val();
		$searchValue = $("#dish-search").val();

		if($searchValue == undefined) {
			$dishArray = model.getAllDishes( $selectValue).prevObject;
		}else {	
			$dishArray = model.getAllDishes( $selectValue, $searchValue );
		}

		$.each( $dishArray , function(index, object) {
			$("#mid-lower .container").append(
				"<div class=\"dish col-sm-15\" id=\"" + object.id + "\">" +
					"<div class=\"dish-header\">" +  
						"<img src=\"images/" + object.image + "\">" +
						"<p>" + object.name + "</p>" +
					"</div>" +
					"<div class=\"dish-description\"><p>" + "Lorem ipsum dolor sit amet, pri eu insolens corrumpit. Mea an quem saperet consequat, at sit soleat postulant iracundia, quo putent efficiendi eu. Summo ridens epicuri ad mea, ei clita utroque propriae ius, mei ei animal nostrum. Te altera tritani repudiare est." + "</p> </div>" +
				"</div>");
		});

		$.each(model.getFullMenu(), function(index, object){
			$("#pendingRow").before(
				"<tr class=\"selectedDishRow\">" +
					"<td class=\"number-column\">" + object.id + "</td>" + 
					"<td class=\"dish-column\">" + object.name + "</td>" + 
					"<td class=\"cost-column\">" + model.getDishPrice(object.id)*model.getNumberOfGuests() + "</td>" + 
				"</tr>"
			);
		});

		$("#totalPrice span").html(
			"" + model.getTotalMenuPrice()
		);
	}
	$(document).ready(this.loadView());
}
 
