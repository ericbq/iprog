//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#mid-lower");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

}
 
