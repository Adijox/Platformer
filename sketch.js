let player;
let platforms = [];
const gravity = 0.005;
function setup() {
createCanvas(1000, 600);
background(51);
  player = new Player(width/2, 30);
  for(var i =0; i<10; i++) {
    platforms.push(new Platform(random(0, width), random(0, height), 70, 'green' , i));
  }
}

function draw() {
  background(51);
  fill(255);
  player.applyForce(createVector(0, gravity));
  player.update();
  player.display();
  for(plat of platforms) {
    plat.display();
  }
}
