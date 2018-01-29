function Player(x,y) {
  this.x = x;
  this.y = y;

  this.pos = createVector(this.x, this.y);

  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  //Pour les forces verticales
  this.applyForce = function(f) {
    this.acc.add(f);
  }

//Pour le changelent de vitesse latérale instaéntane
  this.applyChange = function(f) {
    this.vel.add(f);
  }

    this.update = function() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(20);
    }

    this.display = function() {
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
