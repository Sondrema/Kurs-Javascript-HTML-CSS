// Objekter

var user = {
  firstName: "Sondre",
  lastname: "Maehre",
  age: 30,
  driversLicence: true
}

// alert.(user.firstName);

user.country = "Norway";
user.age = 31;

console.log(user);

var questions = [
  {
    question: "Hva heter jeg?",
    answer: "Halvard"
  },
  {
    question: "Hvor gammel er jeg?",
    answer: 30
  }
]

alert(questions[1].question);
