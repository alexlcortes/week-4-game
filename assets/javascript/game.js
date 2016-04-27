$(document).ready(function() {

	// variables
	var wins =0;
	var loses = 0;
	var gamerNumber = 0;

	// number generation
	var randomNumber = Math.floor((Math.random() * 100) + 1);
	console.log(randomNumber);
	$('#random-number').html(randomNumber);

	var crystalOne = Math.floor((Math.random() * 20) + 1);
	console.log(crystalOne);

	var crystalTwo = Math.floor((Math.random() * 20) + 1);
	console.log(crystalTwo);

	var crystalThree = Math.floor((Math.random() * 20) + 1);
	console.log(crystalThree);

	var crystalFour = Math.floor((Math.random() * 20) + 1);
	console.log(crystalFour);


		// buttons
		$('.button1').on('click', function() {
			gamerNumber = crystalOne + gamerNumber;
			$('#gamer-number').html(gamerNumber);
			check();
		});

		$('.button2').on('click', function() {
			gamerNumber = crystalTwo + gamerNumber;
			$('#gamer-number').html(gamerNumber);
			check();
		});

		$('.button3').on('click', function() {
			gamerNumber = crystalThree + gamerNumber;
			$('#gamer-number').html(gamerNumber);
			check();
		});

		$('.button4').on('click', function() {
			gamerNumber = crystalFour + gamerNumber;
			$('#gamer-number').html(gamerNumber);
			check();
		});

		// resets
		var newGame = function() {
			randomNumber = Math.floor((Math.random() * 100) + 1);
			$('#random-number').html(randomNumber);

			crystalOne = Math.floor((Math.random() * 20) + 1);

			crystalTwo = Math.floor((Math.random() * 20) + 1);

			crystalThree = Math.floor((Math.random() * 20) + 1);

			crystalFour = Math.floor((Math.random() * 20) + 1);

			gamerNumber = 0;
		}


		// statements
		var check = function() {
			if (randomNumber == gamerNumber) {
				wins++;
				$('#wins').html(wins);
				newGame();
			} else if (randomNumber < gamerNumber) {
				loses++;
				$('#loses').html(loses);
				newGame();
			}
		}
	});







