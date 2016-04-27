$(document).ready(function() {
	var wins =0;
	var loses = 0;
	var gamerNumber = 0;
	var crytalOne = 0;
	var crystalTwo = 0;
	var crystalThree = 0;
	var crystalFour = 0;

		var randomNumber = Math.floor((Math.random() * 100) + 1);
		console.log(randomNumber);
		$('#random-number').html(randomNumber);

		crystalOne = Math.floor((Math.random() * 20) + 1);
		console.log(crystalOne);

		crystalTwo = Math.floor((Math.random() * 20) + 1);
		console.log(crystalTwo);

		crystalThree = Math.floor((Math.random() * 20) + 1);
		console.log(crystalThree);

		crystalFour = Math.floor((Math.random() * 20) + 1);
		console.log(crystalFour);

		$('.button1').on('click', function() {
			gamerNumber = crystalOne + gamerNumber;
			$('#gamer-number').html(gamerNumber);
		});

		$('.button2').on('click', function() {
			gamerNumber = crystalTwo + gamerNumber;
			$('#gamer-number').html(gamerNumber);
		});

		$('.button3').on('click', function() {
			gamerNumber = crystalThree + gamerNumber;
			$('#gamer-number').html(gamerNumber);
		});

		$('.button4').on('click', function() {
			gamerNumber = crystalFour + gamerNumber;
			$('#gamer-number').html(gamerNumber);

		});



	});

// $('#reset').on('click', function() {
// 	ready();
// });







