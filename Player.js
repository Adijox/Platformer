function Player(x,y) {
  this.x = x;
  this.y = y;
  this.prevx;
  this.prevy;
  this.speed = 3;
  this.size = 10;
  this.bounceVect = createVector(0, -5);

  this.pos = createVector(this.x, this.y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);



  //Pour les forces verticales
  this.applyForce = function(f) {
    this.acc.add(f);
  }

//Pour le changelent de vitesse latérale instaéntane
  this.applyChange = function(f) {
    this.pos.add(f);
  }

      this.bounce = function() {
        this.applyForce(createVector(0, -8));
      }

      this.rebounce = function(rbspeed) {
        if(rbspeed < 0) {
          rbspeed *= -1;
        }
        this.applyForce(createVector(0, rbspeed));
      }
    this.update = function() {
//On fait une copie des coordonnées (utilisées dans sketch.js)
      this.prevx = this.pos.x;
      this.prevy = this.pos.y;

      this.vel.add(this.acc);
      this.vel.limit(20);
      this.pos.add(this.vel);
      this.acc.mult(0);
        if(keyIsDown(68)) {
          this.applyChange(this.speed, 0);
        }
        if(keyIsDown(81)) {
          this.applyChange(-this.speed, 0);
        }

    }

    this.display = function() {
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
