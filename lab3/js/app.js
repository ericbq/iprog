$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var selectionView = new SelectionView($("#content"), model);
	var selectionViewController = new SelectionViewController(selectionView, model);
	model.addObserver(selectionViewController);

	var dishView = new DishView($("#content"), model);
	var dishViewController = new DishViewController(dishView, model);
	model.addObserver(dishViewController);
	// var overviewView = new OverviewView($("#overview-content"), model);
	// var preparationView = new PreparationView($("#preparation-content"), model);

	this.changeView = function(view, id) {

	}

});