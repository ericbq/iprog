var LandingPageController = function() {

	$("#newDinnerButton").on("click", function() {
		$("#landingPage").css('display', 'none');
		$("#headline").css('display', 'block');
		$("#selectDishView").css('display', 'flex');
	});

}
