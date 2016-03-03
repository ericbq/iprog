var SelectionViewController = function (view, model) {

	this.update = function(arg1, arg2, arg3, arg4) {
		if(arg2 === undefined) {
			if( typeof arg1 === 'number') {
				view.numberOfGuests = arg1;
			} else {
				model.selectedDishes = arg1;
			}
		} else {
			model.numberOfGuests = arg1;
			model.selectedDishes = arg2;
			model.dishes = arg4;
		}
		updateView();
	}


	var updateView = function() {
		$("#mid-lower .container").html("");
		$(".selectedDishRow").remove();
		view.loadView();
	}

	$("#dish-search").keyup(function() {
		$('#loading').css("display", "block");
		$searchValue = $("#dish-search").val();

		$dishArray = model.getRecipeJson( $searchValue );
 		console.log($dishArray);
		updateView();
	});

	$("#mid-upper select").change(function() {
		$('#loading').css("display", "block");
		
		$selectValue = $("#mid-upper select").val();

		$dishArray = model.getRecipeJson( $selectValue);
		console.log($dishArray);
		updateView();
	});

	$(document).on("click", ".dish", function() {
		model.getDishFromId(this.id);


		$("#mid").css('display', 'none');
		$("#dish-mid").css('display', 'block');
	});

	$("#confirm-dinner-button").click( function() {
		$("#selectDishView").css('display', 'none');
		$("#dish-mid").css('display', 'none');
		$("#overview-content").css('display', 'flex');
	});



	$("#numberOfGuests").change(function() {
		model.setNumberOfGuests( $("#numberOfGuests").val() );
	});

}
