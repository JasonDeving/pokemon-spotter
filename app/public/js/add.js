// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks addBtn
$('#addBtn').on("click", function(){

	// make a newCharacter obj
	var newCharacter = 
	{
		name: $("#name").val().trim(), // name from name input
		address: $("#address").val().trim(), // role from role input
		lat: $("#lat").val().trim(), // lat
		long: $("#long").val().trim() // long
	};

	// grab the url from the window/tab
	var currentURL = window.location.origin;

	// send an AJAX POST-request with jQuery
	$.post( currentURL + "/api/new", newCharacter)
		// on success, run this callback
		.done(function(data){
			// log the data we found
			console.log(data);
			// tell the user we're adding a character with an alert window
			alert("new pokemon added")
		})

	// empty each input box by replacing the value with an empty string
	$('#name').val("");
	$('#address').val("");
	$('#lat').val("");
	$('#long').val("");

	// returning false will stop the page from reloading
	// by preventing the form's default behavior.
	return false;

});	
