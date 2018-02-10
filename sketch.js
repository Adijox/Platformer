let player;
let platforms = [];
const gravity = 0.2;
const fps = 60;
// dans la liste timers, il y aura des objets faits selon le shéma de Timer.js; c'est le meilleur moyen que j'ai trouvé pour exécuter des lignes
// de code PENDANT une durée précise, et plus après (situation très courante dans le game design). C'est pourquoi l'objet Timer admet un paramètre 'action' qui est une fonction
let timers = [];


function setup() {
  createCanvas(480, 720);
  background(51);
  rectMode(CENTER);
  pixelDensity(3);
  frameRate(fps);

  player = new Player(width/2, 30);
  for(let i =0; i<10; i++) {
    platforms.push(new Platform(random(0, width), random(0, height), 50, 'green', i));
  }
}

function draw() {
  background(51);
  fill(255);
  player.applyForce(createVector(0, gravity));


  for(let i=0; i<platforms.length;i++) {
  // On commence par vérifier que la balle, depuis la dernière itération, n'a pas traversé une plateforme à cause de sa trop grande vitesse qui la fait se 'téléporter'.
  // Si c'est le cas, on la fait rebondir et on l'empeche de rebounce. Sinon, détection de collision normale

    if(GoThrough(i)) {
//On téléporte la balle vers le haut
        player.vel.mult(0);
        player.pos.add(createVector(0, -1*(player.pos.y - player.prevy)));
      console.log('WENT THROUGH');
    }
    if(UpCollision(i)) {
//Si ces conditions sont vérifiées, alors on est dans le cas d'une collsion par le dessus et on lance la fonction adaptée
        player.vel.mult(0);
        player.bounce();
      console.log('bouncing');
    }

    if(DownCollision(i)) {
//Si ces conditions sont vérifiées, alors on est dans le cas d'une collsion par le dessous et on lance la fonction adaptée
//contrairement au bounce, le rebounce est proportionnel à la vitesse verticale de la balle (c'est donc un parametre de la fonction rebounce())
        let rbspeed = player.vel.y;
        player.rebounce(rbspeed);
        console.log('rebouncing');
    }
  //Fin de la vérification de tt plateformes (de la boucle forZ)
  }

// A la fin de chaque itération (exécution de la boucle draw), on actualise tous les timers, afin qu'ils ajoutent +1 au temps écoulé depuis leur restart
for(let i = 0; i < 10; i++) {
  if(typeof timers[i] !== 'undefined') {
    timers[i].update();
  }
}

// Une fois que les propriétés(position, couleur, etc) des objets sont définitives pour cette itération, on peut afficher les objets (les timers n'ont pas de représentation graphique et donc pas de fonction display)
  for(plat of platforms) {
    plat.display();
  }
  player.update();
  player.display();
}

function UpCollision(i) {
  return player.pos.x+(player.size/2) > platforms[i].x-(platforms[i].width/2)
  && player.pos.x-(player.size/2) < platforms[i].x+(platforms[i].width/2)
  && player.pos.y+(player.size/2) > platforms[i].y-(platforms[i].height/2)
  && player.pos.y-(player.size/2) < platforms[i].y-(platforms[i].height/2)
  && player.pos.y < platforms[i].y;
}
function DownCollision(i) {
  return player.pos.x+(player.size/2) > platforms[i].x-(platforms[i].width/2)
  && player.pos.x-(player.size/2) < platforms[i].x+(platforms[i].width/2)
  && player.pos.y+(player.size/2) > platforms[i].y+(platforms[i].height/2)
  && player.pos.y-(player.size/2) < platforms[i].y+(platforms[i].height/2)
  && player.pos.y > platforms[i].y;
}
function GoThrough(i) {
  return player.prevx+(player.size/2) > platforms[i].x-(platforms[i].width/2)
  && player.prevx-(player.size/2) < platforms[i].x+(platforms[i].width/2)
  && player.pos.x+(player.size/2) > platforms[i].x-(platforms[i].width/2)
  && player.pos.x-(player.size/2) < platforms[i].x+(platforms[i].width/2)
  && player.prevy < platforms[i].y
  && player.pos.y > platforms[i].y;
}
