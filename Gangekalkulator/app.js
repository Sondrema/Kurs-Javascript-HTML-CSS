// En enkel gangekalkulator

var gangeKnapp = document.getElementById("gangeKnapp");
var resultat = document.getElementById("resultat");

// addEventListener();

gangeKnapp.addEventListener("click", function (){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  gangeResultat = tall1 * tall2;
  resultat.textContent = "Resultatet er " + gangeResultat;
});


var deleKnapp = document.getElementById("deleKnapp");
var resultat = document.getElementById("resultat");

// addEventListener();

deleKnapp.addEventListener("click", function (){
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  deleResultat = tall1 / tall2;
  resultat.textContent = "Resultatet er " + deleResultat;
});
