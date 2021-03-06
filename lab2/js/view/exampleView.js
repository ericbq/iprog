//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	

	$(document).ready(function() {
		$("#numberOfGuests").val( model.getNumberOfGuests() );

		$selectValue = $("#mid-upper select").val();
		$searchValue = $("dish-search").val();

		$.each( model.getAllDishes( $selectValue, $searchValue ).prevObject , function(index, object) {

			$("#mid-lower .container").append(
				"<div class=\"dish col-sm-15\" id=\"" + object.id + "\">" +
					"<div class=\"dish-header\">" +  
						"<img src=\"images/" + object.image + "\">" +
						"<p>" + object.name + "</p>" +
					"</div>" +
					"<div class=\"dish-description\"><p>" + "Lorem ipsum dolor sit amet, pri eu insolens corrumpit. Mea an quem saperet consequat, at sit soleat postulant iracundia, quo putent efficiendi eu. Summo ridens epicuri ad mea, ei clita utroque propriae ius, mei ei animal nostrum. Te altera tritani repudiare est." + "</p> </div>" +
				"</div>");

			console.log(object.image + " " + object.name + " " + object.description);
		});
	})


	$("#numberOfGuests").keyup(function() {
		model.setNumberOfGuests( $this.val() );
	});

}
 
