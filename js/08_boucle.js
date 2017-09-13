/**
 *
 * Boucle
 */

var marge;
var dia;
var intervalle;

function setup() {
  var canvas = createCanvas(680, 360);
  canvas.parent('canvas-pos');
  background(33);
  smooth();
  noStroke();
  rectMode(CENTER);
  marge = 25;
  dia = 10;
  intervalle = 10;

}

function draw() {
  background(33);
  for (var y=marge; y<height-marge; y+=intervalle) {
    for (var x=marge; x<width-marge; x+=intervalle) {

      ellipse(x, y, dia, dia);
    }
  }
}

/////////////////////////// FUNCTIONS ////////////////////////////
