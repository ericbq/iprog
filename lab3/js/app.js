$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var selectionView = new SelectionView($("#content"), model);

	var dishView = new DishView($("#content"), model);
	var overviewView = new OverviewView($("#overview-content"), model);
	var preparationView = new PreparationView($("#preparation-content"), model);


});