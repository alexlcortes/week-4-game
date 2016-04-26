$(document).ready(function() {
	var wins =0;
	var loses = 0;
	var randomNumber = 0;
	var gamerNumber = [];
	var crytalOne = [];
	var crystalTwo = [];
	var crystalThree = [];
	var crystalFour = [];

	$('#start').on('click', function() {
		randomNumber = Math.floor((Math.random() * 100) + 1);
		console.log(randomNumber);
		$('#random-number').html(randomNumber);
	});
});






