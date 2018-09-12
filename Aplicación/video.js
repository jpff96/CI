var capture;

function setup() {
  var canvas = createCanvas(320, 240);
  var div = select('#camera');
  div.child(canvas);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  background(255);
  noFill();
  strokeWeight(3);
  stroke(0);
  ellipse(160,100,100,100);
  image(capture, 0, 0, 320, 240);
}