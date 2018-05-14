function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.threadX = x;
  this.threadY = y;
  this.r = random(150);
  this.life = 0;


  this.show = function() {
    noFill()
    stroke(255, random(255));
    point(this.threadX, this.threadY);
    stroke(0, 500 * (1 / this.r));
    if (this.r > 0) {
      ellipse(this.x, this.y, this.r, this.r);
    }
  }


  this.update = function() {
    this.life ++;
    if (this.r > 0) {
      this.r -= 5;
    }
    this.threadX += random(-3, 3);
    this.threadY += random(-3, 3);
  }
}
