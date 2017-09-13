/**
 *
 * Boucle
 */

function setup() {
  var canvas = createCanvas(680, 360);
  canvas.parent('canvas-pos');
  background(33);
  smooth();
  noStroke();
  rectMode(CENTER);
  // la structure de la boucle for est comprise :
  // - une variable avec une valeur initiale > int i=0;
  // - une condition de  test > si la varialbe est inférieur à ...
  // - mise-à-jour de notre variable si la test est vrai

  // Ensuite
  // Tant que la boucle est active, le programme exécute les instructions
  // à l'intérieur de la boucle - entre les accolades
  for (var i=0; i<5000; i++) {

    var x = random(width); // une valeur aléatoire pour x à chaque fois
    var y = random(height); // une valeur aléatoire pour y à chaque fois
    var dia = random(1, 9); // une valeur aléatoire pour la diamètre à chaque fois

    // nous dessinons donc 4999 ellipses à une position différente et avec une taille différente
    ellipse(x, y, dia, dia);
  }
}

function draw() {
  //background(33);

}

/////////////////////////// FUNCTIONS ////////////////////////////
// nous utilisons keyTyped à la place de keyPressed() lorsqu'on veut
// tester si l'on appuie sur une touche particulière du clavier.
// voir REF : https://p5js.org/reference/#/p5/keyTyped
function keyTyped(){
      setup();
}
