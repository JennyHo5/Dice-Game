var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var heading = document.querySelector("h1");


var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

img1.setAttribute("src", randomImageSource1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

img2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
  heading.innerHTML = "Player 1 wins!";
}else if (randomNumber1 < randomNumber2){
  heading.innerHTML = "Player 2 wins!";
}else {
  heading.innerHTML = "Refresh Me";
}
