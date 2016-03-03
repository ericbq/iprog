//DishView Object constructor
var PreparationView = function (container, model) {

	this.loadView = function() {
		$("#overview-headline span").html( model.getNumberOfGuests() + " people");

		var selectedMenu = model.getFullMenu();
		$.each(selectedMenu, function(index, dish) {
			$("#preparation-content table").append(
				"<tr id=\"tablerow-dish-" + dish.RecipeID + "\">" +
					"<td class=\"td-image\">" +
						"<img src=\"" + dish.HeroPhotoUrl + "\" style=\"width:300px;\">" +
					"</td>" +
					"<td class=\"td-image\">" +
						"<h2>" + dish.Title + "</h2>" +
						"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis tristique arcu tempus commodo. Curabitur vel ex lorem. Curabitur porta tellus nunc. Aliquam aliquam elementum dui vitae tincidunt. Donec egestas in lorem ac finibus. Aenean molestie, nibh eget luctus gravida, leo quam fringilla sem, a sollicitudin nibh velit at enim. Nunc convallis tortor ac odio consequat vestibulum. Nulla facilisi.</p>" +
					"</td>" +
					"<td>" +
						"<h3> Preparation </h3>" +
						"<p>" + dish.Description + "</p>" +
					"</td>" +
				"</tr>"
			);
		});

	}

	$(document).ready(this.loadView());
}
