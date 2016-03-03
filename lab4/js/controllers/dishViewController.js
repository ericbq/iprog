var DishViewController = function(view, model) {
	$("#dish-summary button").on("click", function() {
		model.addDishToMenu(model.getActiveDish());

		$("#dish-mid").css('display', 'none');
		$("#mid").css('display', 'flex');
	});

	$("#mid-left button").on("click", function() {
		$("#dish-mid").css('display', 'none');
		$("#mid").css('display', 'flex');
	});

	this.update = function(arg1, arg2, arg3, arg4) {
		$("#ingredient-list").html("");
		model.activeDish = arg3;
		view.currentDish = model.getActiveDish();
		console.log(view.currentDish);
		view.loadView();
	};
}
