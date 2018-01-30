function Player(x,y) {
  this.x = x;
  this.y = y;
  this.speed = 3;
  this.size = 10;
  this.bounceVect = createVector(0, -5);

  this.pos = createVector(this.x, this.y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);



  //Pour les forces verticales
  this.applyForce = function(f) {
    this.acc = f;
    console.log(f);
  }

//Pour le changelent de vitesse latérale instaéntane
  this.applyChange = function(f) {
    this.pos.add(f);
  }

      this.bounce = function() {
        this.acc.mult(0);
        this.vel.mult(0);
        this.applyForce(createVector(0, -5));
      }

    this.update = function() {
      this.vel.add(this.acc);
      this.vel.limit(20);
      this.pos.add(this.vel);

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
