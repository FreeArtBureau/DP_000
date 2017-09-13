/**
 *
 * Random
 */

var myColour;
var dia;

function setup() {
  var canvas = createCanvas(680, 360);
  canvas.parent('canvas-pos');
  background(33);
  smooth();
  rectMode(CENTER);
  myColour = color(255);
  dia = 250;
}

function draw() {
  background(33);

  fill(myColour);
  rect(width/2, height/2, dia, dia);

  infos(); // afficher des infos ;–)
}

/////////////////////////// FUNCTIONS ////////////////////////////
// nous utilisons keyTyped à la place de keyPressed() lorsqu'on veut
// tester si l'on appuie sur une touche particulière du clavier.
// voir REF : https://p5js.org/reference/#/p5/keyTyped
function keyTyped(){
  if (key == 'r') {
      // notez bien la création des 3 variables locales
      // pour stocker les valeurs aléatoires pour chaque argument
      // de la fonction color > rouge, vert, bleu

      var rouge = random(255); // une valeur aléatoire entre 0 et 255
      var vert = random(255);
      var bleu = random(255);

      myColour = color(rouge, vert, bleu);

      dia = random(100,320); // une valeur aléatoire entre 100 et 320
    }
}

// fonction pour afficher du texte
function infos(){
 fill(255);
 textSize(18);
 text("Appuyer sur a | b | c", 10, height-45);
 textSize(12);
 text("Couleur choisie : " + myColour, 10, height-25);
 text("Taille choisie : " + dia, 10, height-10);
}
