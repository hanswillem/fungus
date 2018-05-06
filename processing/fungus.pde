// the main sketch

String t = "Fungus!";
PFont f;
ArrayList<Particle> p;
PGraphics buffer;

void setup() {
  size(1280, 720);
  buffer = createGraphics(1280, 720);
  background(#2CDDFF);
  fill(255);
  noStroke();
  p = new ArrayList<Particle>();
  textSize(250);
  f = createFont("Georgia", 250);
  textFont(f);
  textAlign(CENTER);
  text(t, width/2, height/2 + 75);
  // PGraphics stuff
  buffer.beginDraw();
  buffer.background(0);
  buffer.fill(255);
  buffer.noStroke();
  buffer.textFont(f);
  buffer.textAlign(CENTER);
  buffer.text(t, width/2, height/2 + 75);
  buffer.endDraw();
}


void draw() {
  getRandomPoint();
  drawParticles();
  divideAndKillParticles();
}


void drawParticles() {
  for (Particle i : p) {
    i.show();
    i.update();
  }
}


void divideAndKillParticles() {
  for (int i = 0; i < p.size(); i++) {
    if (p.get(i).life > 25) {
      p.add(new Particle(p.get(i).x + random(-10, 10), p.get(i).y + random(-10, 10)));
      p.remove(i);
    }
  }
}


void getRandomPoint() {
  int x = int(random(width));
  int y = int(random(height));
  if (isWhite(x, y) == true) {
    p.add(new Particle(x, y));
  }
}


boolean isWhite(int x, int y) {
  color c = get(x, y);
  if (buffer.get(x, y) == -1) {
    return true;
  } else {
    return false;
  }
}
