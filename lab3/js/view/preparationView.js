//DishView Object constructor
var PreparationView = function (container, model) {
	var selectedMenu = model.getFullMenu();
	$(document).ready(function() {
		$("#overview-headline span").html( model.getNumberOfGuests() + " people");

		$lengthOfArray = selectedMenu.length;
		//model.getFullMenu();
		$.each(selectedMenu, function(index, dish) {
			$("#preparation-content table").append(
				"<tr id=\"tablerow-dish-" + dish.id + "\">" +
					"<td class=\"td-image\">" +  
						"<img src=\"images/" + dish.image + "\">" +
					"</td>" +
					"<td class=\"td-image\">" +  
						"<h2>" + dish.name + "</h2>" +
						"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis tristique arcu tempus commodo. Curabitur vel ex lorem. Curabitur porta tellus nunc. Aliquam aliquam elementum dui vitae tincidunt. Donec egestas in lorem ac finibus. Aenean molestie, nibh eget luctus gravida, leo quam fringilla sem, a sollicitudin nibh velit at enim. Nunc convallis tortor ac odio consequat vestibulum. Nulla facilisi.</p>" + 
					"</td>" +
					"<td>" +
						"<h3> Preparation </h3>" + 
						"<p>" + dish.description + "</p>" +
					"</td>" +
				"</tr>"
			);
		});

	});
}
 