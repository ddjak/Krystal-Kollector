//function to make random numbers - DONE
//function to give random number values to each crystal image - DONE
//function to make a random score to get - DONE
//function to add the clicks from crystals to current store
//reset function when game is over (win/lose)
//function when score to get == current score, it is a win
//function when score to get <= current score, it is a loss

var randomNumberToGet = Math.floor((Math.random() * 120) + 19);

var scoreToGet = 0;
var currentScore;
var wins = 0;
var losses = 0;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;

		var checkScore = function() {
			if (currentScore === scoreToGet) {
				wins++;
				$(".wins").html(wins);
			}

			else if (currentScore > scoreToGet) {
				losses++;
				$('.losses').html(losses);
			}
		};

		var reset = function() {
				
				currentScore = 0;
				randomNumberToGet = Math.floor((Math.random() * 120) + 19);
				var crystalValue1 = Math.floor((Math.random() * 12) + 1);
				var crystalValue2 = Math.floor((Math.random() * 12) + 1);
				var crystalValue3 = Math.floor((Math.random() * 12) + 1);
				var crystalValue4 = Math.floor((Math.random() * 12) + 1);

				scoreToGet = randomNumberToGet;
				
				$(".currentScore").html(currentScore);
				$(".scoreToGet").html(scoreToGet);

				console.log(crystalValue1);
				console.log(crystalValue2);
				console.log(crystalValue3);
				console.log(crystalValue4);
		};
	
	reset();
		
		scoreToGet = randomNumberToGet;

		$(".scoreToGet").html(scoreToGet);
		$(".currentScore").html(currentScore);
		$(".wins").html(wins);
		$(".losses").html(losses);
		console.log("It resets");
		
		
		$(".crystal-1").on("click", function() {
			currentScore = currentScore + crystalValue1;
			$(".currentScore").html(currentScore);
			console.log("It clicks");
			console.log(currentScore);
			checkScore();
		});

		$(".crystal-2").on("click", function() {
			currentScore = currentScore + crystalValue2;
			$(".currentScore").html(currentScore);
			checkScore();
		});

		$(".crystal-3").on("click", function() {
			currentScore = currentScore + crystalValue3;
			$(".currentScore").html(currentScore);
			checkScore();
		});

		$(".crystal-4").on("click", function() {
			currentScore = currentScore + crystalValue4;
			$(".currentScore").html(currentScore);
			checkScore();
		});