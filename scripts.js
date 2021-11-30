//js file for dice game project



//definie variables for random numbers
var randomNumber1; 
var randomNumber2;

//functions to create those random numbers
function getRandom1(){
	randomNumber1 = Math.floor(Math.random() * 6) + 1;
	return randomNumber1;
	}

function getRandom2(){
	randomNumber2 = Math.floor(Math.random() * 6) + 1;
	return randomNumber2;
	}

//function to change dice pic based on above random number
function dicePic1(){
	if (randomNumber1 === 1 ){
		document.querySelector(".img1").setAttribute("src", "images/dice1.png");
	} else if (randomNumber1 === 2){
		document.querySelector(".img1").setAttribute("src", "images/dice2.png");
	} else if (randomNumber1 === 3){
		document.querySelector(".img1").setAttribute("src", "images/dice3.png");
	} else if (randomNumber1 === 4){
		document.querySelector(".img1").setAttribute("src", "images/dice4.png");
	} else if (randomNumber1 === 5){
		document.querySelector(".img1").setAttribute("src", "images/dice5.png");
	} else if (randomNumber1 === 6){
		document.querySelector(".img1").setAttribute("src", "images/dice6.png");
	}
}

//function to change dice pic based on above random number
function dicePic2(){
	if (randomNumber2 === 1 ){
		document.querySelector(".img2").setAttribute("src", "images/dice1.png");
	} else if (randomNumber2 === 2){
		document.querySelector(".img2").setAttribute("src", "images/dice2.png");
	} else if (randomNumber2 === 3){
		document.querySelector(".img2").setAttribute("src", "images/dice3.png");
	} else if (randomNumber2 === 4){
		document.querySelector(".img2").setAttribute("src", "images/dice4.png");
	} else if (randomNumber2 === 5){
		document.querySelector(".img2").setAttribute("src", "images/dice5.png");
	} else if (randomNumber2 === 6){
		document.querySelector(".img2").setAttribute("src", "images/dice6.png");
	}
}

//determine winner by comparing numbers and changing text on page with result
function winner(){
	if (randomNumber1 > randomNumber2){
		document.querySelector("h1").innerHTML = "Player 1 wins!";
	} else if (randomNumber2 > randomNumber1){
		document.querySelector("h1").innerHTML = "Player 2 wins!";
	} else if (randomNumber1 == randomNumber2){
		document.querySelector("h1").innerHTML = "Draw!";
	}
}


//Function added to button to play game
function rollDice(){
	getRandom1();
	dicePic1();
	getRandom2();
	dicePic2();
	winner();
}

