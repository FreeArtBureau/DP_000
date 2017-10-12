/**
 *
 * Boucle
 */

var marge;
//var dia;
var intervalle;

function setup() {
  var canvas = createCanvas(680, 360);
  canvas.parent('canvas-pos');
  background(33);
  smooth();
  noStroke();
  rectMode(CENTER);
  marge = 50;
  //dia = 10;
  intervalle = 50;

}

function draw() {
  background(33);
  for (var y=marge; y<height-marge; y+=intervalle) {
    for (var x=marge; x<width-marge; x+=intervalle) {
      var dia = noise(x * 0.015, y * 0.015, frameCount * 0.015) * 13;
      ellipse(x, y, dia*5, dia*5);
    }
  }
}

/////////////////////////// FUNCTIONS ////////////////////////////
