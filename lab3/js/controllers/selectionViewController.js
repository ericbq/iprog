var SelectionViewController = function (view, model) {

	this.update = function(arg1, arg2, arg3) {
		if(arg2 === undefined) {
			if( typeof arg1 === 'number') {
				model.setNumberOfGuests(arg1);
			} else {
				model.selectedDishes = arg1;
			}
		} else {
			model.setNumberOfGuests(arg1);
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

	$("#numberOfGuests").change(function() {
		model.setNumberOfGuests( $("#numberOfGuests").val() );
	});

}
