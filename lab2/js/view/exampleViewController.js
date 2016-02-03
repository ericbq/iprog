$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	// var exampleView = new ExampleView($("#content"));

	$(document).ready(function() {
		$("#numberOfGuests").val( model.getNumberOfGuests() );

		$selectValue = $("#mid-upper select").val();
		$searchValue = $("dish-search").val();

		$.each( model.getAllDishes( $selectValue, $searchValue ).prevObject , function(name, object) {

			$("#mid-lower .container").append(
				"<div class=\"dish col-sm-2\" id=\"" + object.id + "\">" +
					"<div class=\"dish-header\">" +  
						"<img src=\"images/" + object.image + "\">" +
						"<p>" + object.name + "</p>" +
					"</div>" +
					"<div class=\"dish-description\"><p>" + object.description + "</p> </div>" +
				"</div>");

			console.log(object.image + " " + object.name + " " + object.description);
		});
	})


	$("#numberOfGuests").keyup(function() {
		model.setNumberOfGuests( $this.val() );
	});

});