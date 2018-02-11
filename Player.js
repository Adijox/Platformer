function Player(x,y, col) {
  this.x = x;
  this.y = y;
  this.prevx;
  this.prevy;
  this.speed = 3;
  this.size = 10;
  this.col = col;
  this.fillcol;


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
//On applique une très petite téléportation (pour pas que la balle apparaisse comm enfoncée dans la plateforme), puis une accélération
        this.applyChange(createVector(0, 2));
        this.applyForce(createVector(0, rbspeed));
      }

      this.colorSwitch = function() {
        if(this.col == 0) {
          this.col = 1;
        }else {
          this.col = 0;
        }
      }
    this.update = function() {
//On fait une copie des coordonnées (utilisées dans sketch.js)
      if(keyIsDown(68)) {
        this.applyChange(this.speed, 0);
      }
      if(keyIsDown(81)) {
        this.applyChange(-this.speed, 0);
      }
      this.prevx = this.pos.x;
      this.prevy = this.pos.y;

      this.vel.add(this.acc);
      this.vel.limit(20);
      this.pos.add(this.vel);
      this.acc.mult(0);



//On donne la bonne couleur
switch(this.col) {
  case 0 :
  this.fillcol = color(115, 227, 9);
  break;
  case 1 :
  this.fillcol = color(255, 121, 0);
  break;
}
    }

    this.display = function() {
      fill(this.fillcol);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

// On utilise pas keyIsDown mais keyPressed pour détecter l'appui une seule fois(sinon la couleur change environ 5 fois à chaque appui)
function keyPressed() {
  if(keyCode === 32)  {
//On utilise pas this mais player ici (code sale mais ca marche) car on est plus dans l'objet Player à cause de la fonction keyPressed, qui ne peut pas étre appelée dedans
    player.colorSwitch();
  }
}
