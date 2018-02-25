document.addEventListener('DOMContentLoaded',function initialize() 
{
    round = 1;
    points = 0;
    roundScore = 0;
    totalScore = 0;
    ranOut = false;
    var distance;

	mminitialize();
	svminitialize();
 
	function resetTimer() {
		 count = 30;
		 counter = setInterval(timer,1000);
	}
	resetTimer();

	function timer() {
		count -=1;
		if(count <= 0 )
		{
			if(round < 5)
			{
				endRound();
			}
			else if(round > 3)
			{
				endGame();
			}
		clearInterval(counter);
		}
		document.getElementById('timer').innerHTML = count;
	};

	document.getElementById('guessButton').addEventListener('click',function (){
		doGuess();
		rminitialize();
	});

	function calcDistance(fromLat, fromLng, toLat, toLng) {
     return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
   }

	function doGuess() {
		if(ranOut == false)
		{
			clearInterval(counter);

			function resetMarker() {
				guessMarker.setMap(null);
			}
			
		}
	   locLatLongs = window.locLL.toString();
     guessLatLongs = window.guessLatLng.toString();

       window.locArray = locLatLongs.replace(/[\])}[{(]/g, '').split(',');
       window.guessArray = guessLatLongs.replace(/[\])}[{(]/g, '').split(',');
       distance = Math.ceil(calcDistance(window.locArray[0], window.locArray[1], window.guessArray[0], window.guessArray[1]) / 1000);

       function inRange(x, min, max) {
         return(min <= x && x <= max);
       }

       if(inRange(distance, 1, 2)) {
         points = 10000;
       } else if(inRange(distance, 3, 10)) {
         points = 7000;
       } else if(inRange(distance, 11, 50)) {
         points = 4000;
       } else if(inRange(distance, 51, 200)) {
         points = 3000;
       } else if(inRange(distance, 201, 500)) {
         points = 2000;
       } else if(inRange(distance, 501, 800)) {
         points = 1000;
       } else if(inRange(distance, 801, 1300)) {
         points = 500;
       } else if(inRange(distance, 1301, 1600)) {
         points = 400;
       } else if(inRange(distance, 1601, 2300)) {
         points = 300;
       } else if(inRange(distance, 2301, 2800)) {
         points = 200;
       } else if(inRange(distance, 2801, 3200)) {
         points = 100;
       } else if(inRange(distance, 3200, 4500)) {
         points = 50;
       } else if(inRange(distance, 4501, 6000)) {
         points = 25;
       } else {
         points = 0;
       }

       if(round < 5) {
         endRound();
       } else if(round >= 5) {
         endGame();
       }
     timer();
     window.guessLatLng = '';

   }


    function endRound() {
     round++;
     if(ranOut === true) {
       roundScore = 0;н
     } else {
       roundScore = points;
       totalScore = totalScore + points;
     }

     $('.round').html('Текущий раунд: <b>' + round + '/5</b>');
     $('.roundScore').html('Счёт последнего раунда: <b>' + roundScore + '</b>');
     $('.totalScore').html('Общий счёт: <b>' + totalScore + '</b>');

     if(typeof distance === 'undefined' || ranOut === true) {
       $('#roundEnd').html('<p>Слишком долго!<br/>Ничего не получишь!<br/><br/><button id="button3" type="button">Продолжить</button></p></p>');
       $('#roundEnd').fadeIn();
       $('#button3').click(function () {
       	$('#roundEnd').hide();
       	initialize();
       });

       clearInterval(counter);

       function resetMarker() {
         if(guessMarker !== null) {
           guessMarker.setMap(null);
         }
       }

       window.guessLatLng = '';
       ranOut = false;

       points = 0;

     } else {
       $('#roundEnd').html('<p>Твоя точка на<br/><strong><h1>' + distance + '</strong>km</h1> далеко от места.<br/><div id="roundMap"></div><br/> Твой счёт<br/><h1>' + roundScore + ' points</h1> за этот раунд!<br/><br/><button id="button2" type="button">Продолжить</button></p></p>');
       $('#roundEnd').fadeIn();
       $('#button2').click(function()
       {
       	$('#roundEnd').hide();
		    svminitialize();
		    resetTimer();
       });
     }
     window.guessLatLng = '';
     ranOut = false;
 }
 	function endGame() {
     roundScore = points;
     totalScore = totalScore + points;

     $('#endGame').html('<h1>Поздравляю!</h1><h2>Твой финальный счёт:</h2><h1>' + totalScore + '!</h1><button id="buttonExit" type="button">Заново</button>');
     $('#endGame').fadeIn();
     $('#buttonExit').click(function()
     {
     	$('#endGame').hide();
     	svminitialize();
      rminitialize();
      mminitialize();
      round = 0;
      roundScore = 0;
      totalScore = 0;
      $('.round').html('Текущий раунд: <b>' + round + '/5</b>');
      $('.roundScore').html('Счёт последнего раунда: <b>' + roundScore + '</b>');
      $('.totalScore').html('Общий счёт: <b>' + totalScore + '</b>');
     })

     // We're done with the game

   };
});
