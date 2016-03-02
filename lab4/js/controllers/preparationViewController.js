var PreparationViewController = function(view, model) {

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
		$("#preparation-content table").html("");
		view.loadView();
	}	

}
