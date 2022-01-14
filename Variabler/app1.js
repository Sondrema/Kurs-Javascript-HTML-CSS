var name = prompt("Hva heter du?");
var age = prompt(name + ", hvor gammel er du?");
var movie = prompt("Hva er favorittfilmen din?");
var actor = prompt("Hvem hadde hovedrollen?");

var message = "<h1>Hei " + name + "!</h1>";
message += "<p> Du er " + age + " år gammel.</p>";
message += "<p> Favorittfilemn din er  " + movie + "</p>";
message += "<p>" + actor + " hadde hovedrollen </p>";

document.write(message);
