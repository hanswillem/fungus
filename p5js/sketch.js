var textInput;
var p;
var buffer;


function setup() {
  createCanvas(windowWidth, windowHeight);
  buffer = createGraphics(windowWidth, windowWidth);
  background(255, 54, 96);
  fill(255);
  noStroke();
  // text stuff
  textInput = createInput('Fungus');
  textInput.position(width / 2 - (1280 / 2), (height / 2) - 75 - (500 / 2) - 25);
  textInput.input(changeText);
  textSize(250);
  textFont('Georgia');
  textAlign(CENTER);
  fill(255);
  noStroke();
  text(textInput.value(), width/2, height/2);
  // same text stuff as above but for graphics object buffer
  buffer.background(0);
  buffer.textSize(250);
  buffer.textFont('Georgia');
  buffer.textAlign(CENTER);
  buffer.fill(255);
  buffer.noStroke();
  buffer.text(textInput.value(), width/2, height/2);

  rectMode(CENTER);
  p = [];
  drawBox();

}


function draw() {
  getRandomPoint();
  drawParticles();
  divideAndKillParticles();
}


// draw box around area
function drawBox() {
    noFill();
    stroke(255, 50);
    rect(width/2, height/2 - 75, 1280, 500);
}


// chage the text if the user changes the text in the texbox
function changeText() {
  background(255, 54, 96);
  fill(255);
  noStroke();
  // text stuff
  fill(255);
  noStroke();
  text(textInput.value(), width/2, height/2);
  // same text stuff as above but for graphics object buffer
  buffer.background(0);
  buffer.fill(255);
  buffer.noStroke();
  buffer.text(textInput.value(), width/2, height/2);

  p = [];
  drawBox();
}


// draw particles to the screen
function drawParticles() {
  for (var i = 0; i < p.length; i ++) {
    p[i].show();
    p[i].update();
  }
}


// divide particles
function divideAndKillParticles() {
  for (var i = 0; i < p.length; i ++) {
    var nx = p[i].x + random(-10, 10);
    var ny = p[i].y + random(-10, 10);
    if (p[i].life > 25) {
      p.push(new Particle(nx, ny));
      p.splice(i, 1);
    }
  }
}


// get the color of random point within the box
function getRandomPoint() {
  var xoff = (width/2) - (1280 / 2);
  var yoff = ((height / 2) - 75 - (500 / 2));
  var x = xoff + random(1280);
  var y = yoff + random(500);
  if (isWhite(x, y) === true) {
    p.push(new Particle(x, y));
  }
}


// check if color on the graphics buffer at the given coordinates is white
function isWhite(x, y) {
  var c = buffer.get(int(x), int(y));
  if (c[0] === 255 && c[1] === 255 && c[2] === 255 && c[3] === 255) {
    return true;
  } else {
    return false;
  }
}
