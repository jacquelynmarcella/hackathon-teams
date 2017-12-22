$(document).ready(function() {

});


// To show the form to edit
$('.edit-link').click(function(event){
	event.preventDefault();
	var sectionToShow = 'edit-' + $(this).attr('href');
	var sectionId = document.getElementById(sectionToShow);
	$(sectionId).toggle();
})

// When the edit form is submitted
$('#put-form').on('submit', function(event) {
	event.preventDefault();
	var teamElement = $(this);
	var teamUrl = teamElement.attr('action');
	var teamData = teamElement.serialize();
	console.log(teamData);


	// $.ajax({
	// 	method: 'PUT',
	// 	url: teamUrl,
	// 	data: teamData
	// }).done(function(data) {
 //    // get data returned from the PUT route
 //    console.log(data);

 //    // do stuff when the PUT action is complete
 //    // teamElement.remove();

 //    // or, you can redirect to another page
 //    window.location = '/teams';
 //  });
});


// To delete a team
$('.delete-link').click(function(event){
	event.preventDefault(); //Defaut behavior of the link is to go to the URL linked
	//But we want to intercept it and change it to delete
	$.ajax({
		url: $(this).attr('href'),
		method: 'DELETE'
	}).success(function(data){
		window.location.href = '/'; //Reloads the current page on success
	});
});