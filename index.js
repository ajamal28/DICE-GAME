var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomDiceImage1 = "images/dice"+randomNumber1+".png";
document.getElementById("img1").setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImage= "images/dice"+randomNumber2+".png";

document.getElementById("img2").setAttribute("src", randomDiceImage);

if ( randomNumber1 > randomNumber2 ) {
  document.querySelector("h1").innerHTML="Player 1 wins";
} else if ( randomNumber2 > randomNumber1 ){
  document.querySelector("h1").innerHTML="Player 2 wins";
} else {
  document.querySelector("h1").innerHTML="Draw! try again"
}
