// For lops

// i++ betyr at vi ønsker å øke variabelen med 1. Samme som å srkive i = i + 1
// i-- bli da i = i - 1

/* for (var i = 0; i < 10000; i++){
  // document.write(i);
}

var taco = ["Kjøtt", "Ost", "Lomper", "Paprika", "Agurk", "Avokado", "Mais", "Salsa", "Rømme"];

var liste = document.getElementById("list").children

for(var i = 0; i < liste.length; i++){
  liste[i].textContent = taco[i];
}
*/



//Endre CSS med javascript

//var mais = document.getElementById("mais");

//mais.style.color = "white";
//mais.style.backgroundColor = "red";
//mais.style.fontSice = "40px";


// Hvordan fjerne med class
// this = javascript forstår hva som skal fjernes.

var liste = document.getElementById("liste");

for(var i = 0; i < liste.children.length; i++){
  liste.children[i].addEventListener("click", function(){
    this.className = "done";
  });
};
