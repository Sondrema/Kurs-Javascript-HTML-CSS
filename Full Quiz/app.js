var score = 0;

// Question 1
var question1 = prompt("Hva er hovedstaden i Norge?");

if(question1 === "Oslo"){
  score += 1;
  console.log("Spørsmål 1 er riktig.");
};


// Question 2
var question2 = prompt("Hvor gammel er jeg?");
var question2Int = parseInt(question2);

if (question2Int === 27){
  score += 1;
  console.log("Spørsmål 2 er riktig.");
}  else if (question2 > 27){
    score -= 1;
};


//Question 3

var question3 = prompt("Hva er verdens største land?");

if (question3 === "Russland" || question3 === "russland"){
  score += 1;
  console.log("Spørsmål 3 er riktig. ");
};


//Question 4

var question4 =prompt ("Hvor mange kilometer er en maraton?");
var question4Int = parseInt(question4);

if (question4 === 42){
  score += 1;
  console.log("Spørsmål 4 er riktig.");
};


//Oppsummering med score
var message = " <h1> Din score er " + score + " poeng! </h1>";

if (score > 2){
  message += " <p> Bra jobba! </p>";
} else {
  message += " <p> Bedre lykke neste gang! </p>";
};

document.write(message);
