let player;
let platforms = [];
const gravity = 0.2;

function setup() {
  createCanvas(1000, 600);
  background(51);
  rectMode(CENTER);
  player = new Player(width/2, 30);
  for(var i =0; i<10; i++) {
    platforms.push(new Platform(random(0, width), random(0, height), 70, 'green' , i));
  }
}

function draw() {
  background(51);
  fill(255);
  player.applyForce(createVector(0, gravity));


  for(var i=0; i<platforms.length;i++) {
    if(player.pos.x+(player.size/2) > platforms[i].x-(platforms[i].width/2)
    && player.pos.x-(player.size/2) < platforms[i].x+(platforms[i].width/2)
    && player.pos.y+(player.size/2) > platforms[i].y-(platforms[i].height/2)
    && player.pos.y-(player.size/2) < platforms[i].y+(platforms[i].height/2)) {
      bounceTimer = new Timer(30);
      bounceTimer.start();
    }
  }

  if(typeof bounceTimer !== 'undefined') {
    bounceTimer.update();
    if(bounceTimer.status) {
      player.bounce();
      // console.log(bounceTimer.status);

    }
}
  for(plat of platforms) {
    plat.display();
  }
  player.update();
  player.display();
}
