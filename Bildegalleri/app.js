// Prosjekt bildegalleri

var next = document.getElementById("framKnapp");
var back = document.getElementById("tilbakeKnapp");
var image = document.getElementById("image");
var description = document.getElementById("description");
var currentImage = 0;


// Image Array
var images = [
  {
    link: "Image/Bilde1.jpg",
    text: "Pasando el buen rato en Trondheim!"
  },
  {
    link: "Image/Bilde2.jpg",
    text: "Vaya foto de modelo<3"
  },
  {
    link: "Image/Bilde3.jpg",
    text: "Preciosidad máxima!"
  }
];

// Next event handler
next.addEventListener("click", function(){
  currentImage = currentImage + 1;
  if(currentImage === images.length){
    currentImage = 0;
  }
  image.src = images[currentImage].link;
  description.textContent = images[currentImage].text;
});

//Back event handler
back.addEventListener("click", function(){
  currentImage = currentImage - 1;
  if(currentImage === -1){
    currentImage = images.length - 1;
  }
  image.src = images[currentImage].link;
  description.textContent = images[currentImage].text;
});
