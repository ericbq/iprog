var SelectionViewController = function (view, model) {

	this.update = function(arg1, arg2, arg3) {
		if(arg2 === undefined) {
			if( typeof arg1 === 'number') {
				view.numberOfGuests = arg1;
			} else {
				model.selectedDishes = arg1;
			}
		} else {
			model.numberOfGuests = arg1;
			model.selectedDishes = arg2;
		}
		updateView();
	}	


	var updateView = function() {
		$("#mid-lower .container").html("");
		$(".selectedDishRow").remove();
		view.loadView();
	}

	$("#dish-search").keyup(function() {
		updateView();
	});

	$("#mid-upper select").change(function() {
		updateView();
	});

	$(document).on("click", ".dish", function() {
		model.setActiveDish(this.id);

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
