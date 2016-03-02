var OverviewViewController = function(view, model) {

	this.update = function(arg1, arg2, arg3) {
		if(arg2 === undefined) {
			if( typeof arg1 === 'number') {
				model.numberOfGuests = arg1;
			} else {
				model.selectedDishes = arg1;
			}
		} else {
			model.numberOfGuests = arg1;
			model.selectedDishes = arg2;
		}
		$("#selected-menu").html("");
		view.loadView();
	}	

	$("#overview-headline button").click(function() {
		$("#dish-mid").css('display', 'none');
		$("#overview-content").css('display', 'none');
		$("#selectDishView").css('display', 'flex');
		$("#preparation-content").css('display', 'none');

	})

	$("#print-recipe button").click(function() {
		$("#dish-mid").css('display', 'none');
		$("#overview-content").css('display', 'none');
		$("#selectDishView").css('display', 'none');
		$("#preparation-content").css('display', 'block');
	})
}