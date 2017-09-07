/**
  * Processing vs P5.JS
  * https://github.com/processing/p5.js/wiki/Processing-transition
  *
  */

function setup() {
  var canvas = createCanvas(680, 360);
  canvas.parent('canvas-pos');
  background(33);
  smooth();
  noStroke();
}

function draw() {
  background(33);

  // On fait appel à nos 2 fonctions : oscillate & croix
  var taille = oscillate(0.015, 150);
  fill(0,0,255);
  croix(200, height/2, taille);

  var taille2 = oscillate(0.030, 300);
  fill(255,200,0);
  croix(450, height/2, taille2);
}

/////////////////////////// FUNCTIONS ////////////////////////////
// Voici notre nouvelle fonction qui retourne une valeur
function oscillate( _freq,  _valMax) {
  var val = sin(frameCount*_freq) * _valMax;
  return val;
}


function croix(_cntX, _cntY, _taille) {
  rectMode(CENTER);
  push();
  translate(_cntX, _cntY);
  rect(0, 0, _taille, _taille/4);
  rect(0, 0, _taille/4, _taille);
  pop();
}
