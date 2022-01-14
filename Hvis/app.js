//Betingelser

/*
(age === 30)
(name === "Halvard")
(score > 10)
(score < 10)
*/

var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessString = prompt("Hvilke tall tenker jeg på?");
var guessInt = parseInt(guessString);

if (randomNumber === guessInt) {
  alert ("Wow, det er riktig tall!")
} else if (guessInt > randomNumber) {
  alert ("Dessverre, tallet var for høyt! Tallet var " + randomNumber)
} else {
  alert ("Dessverre, tallet var for lavt! Tallet var " + randomNumber)
}
