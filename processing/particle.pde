// the particle class

class Particle {
  float x;
  float y;
  float r;
  float threadX;
  float threadY;
  int life;


  Particle(float _x, float _y) {
    x = _x;
    y = _y;
    r = random(150);
    threadX = x;
    threadY = y;
    r = random(150);
    life = 0;
  }


  void show() {
    noFill();
    stroke(255, random(255));
    point(threadX, threadY);
    stroke(0, 500 * 1 / r);
    if (this.r > 0) {
      ellipse(x, y, r, r);
    }
  }


  void update() {
    life ++;
    if (r > 0) {
      r -= 5;
    }
    threadX += random(-3, 3);
    threadY += random(-3, 3);
  }
}
