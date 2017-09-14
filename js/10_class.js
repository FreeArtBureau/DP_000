/**
 *
 * Boucle
 */

maBalle = [];
var nombreBalles;

function setup() {
  var canvas = createCanvas(680, 360);
  canvas.parent('canvas-pos');
  background(33);
  smooth();
  noStroke();
  rectMode(CENTER);
  nombreBalles = 200;

    for(var i=0; i<nombreBalles; i++){
      maBalle[i] = new Balle();
    }

}

function draw() {
  background(33);

  //les méthodes liées à notre classe
  for(var i=0; i<nombreBalles; i++){
      maBalle[i].afficher();
      maBalle[i].bouger();
      maBalle[i].limiter();
  }


}

/////////////////////////// CLASS ////////////////////////////

/**
 * Voici la structure d'une classe
 *
 */

function Balle() {
  // déclaration de nos paramètres pour notre classe
  // il n'y a pas de constructeur comme dans Processing/Java
  this.x = width/2;
  this.y = height/2;
  this.dia = random(5, 30);
  this.vx = random(-3,3);
  this.vy = random(-3,3);
  this.col = color(233, random(33,220),random(93,255));

  // ensuite nous définissons nos méthodes/fonctions
  this.afficher = function() {
    fill(this.col);
    //notez bien l'affectation de nos paramètres x, y, dia
    ellipse(this.x, this.y, this.dia, this.dia);
  }

  // Méthode pour faire bouger notre balle
   this.bouger = function() {
    this.x+=this.vx;
    this.y+=this.vy;
  }


  // Méthode pour tester et mettre à jour la position
  // en fonction des limites de la fenêtre
   this.limiter = function() {
    if (this.x<0 + this.dia/2) {
      //vx = vx * -1 (THIS MAKES ANY VALUE NEGATIVE).
      this.vx*=-1;
    }
    if (this.x>width - this.dia/2) {
      this.vx*=-1;
    }
    if (this.y<0 + this.dia/2) {
      this.vy*=-1;
    }
    if (this.y>height - this.dia/2) {
      this.vy*=-1;
    }
  }
};
