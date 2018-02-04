let player;
let platforms = [];
const gravity = 0.2;
// dans la liste timers, il y aura des objets faits selon le shéma de Timer.js; c'est le meilleur moyen que j'ai trouvé pour exécuter des lignes
// de code PENDANT une durée précise, et plus après (situation très courante dans le game design). C'est pourquoi l'objet Timer admet un paramètre 'action' qui est une fonction
let timers = [];
function setup() {
  createCanvas(1000, 600);
  background(51);
  rectMode(CENTER);
  player = new Player(width/2, 30);
  for(let i =0; i<10; i++) {
    platforms.push(new Platform(random(0, width), random(0, height), 70, 'green', i));
  }
}

function draw() {
  background(51);
  fill(255);
  player.applyForce(createVector(0, gravity));


  for(let i=0; i<platforms.length;i++) {
    if(player.pos.x+(player.size/2) > platforms[i].x-(platforms[i].width/2)
    && player.pos.x-(player.size/2) < platforms[i].x+(platforms[i].width/2)
    && player.pos.y+(player.size/2) > platforms[i].y-(platforms[i].height/2)
    && player.pos.y-(player.size/2) < platforms[i].y+(platforms[i].height/2)) {
//Si ces conditions sont vérifiées, alors on est dans le cas d'une collsion par le dessus et on lance un timer pendant
//30 ms qui execute la fonction désirée (ici : faire rebondir)
      timers[0] = new Timer(30, function a() {
        console.log('bouncing');
        player.bounce();
      });
      timers[0].restart();
    }
  }

// A la fin de chaque itération (exécution de la boucle draw), on actualise tous les timers, afin qu'ils ajoutent +1 au temps écoulé depuis leur restart
for(let i = 0; i < timers.length; i++) {
    timers[i].update();
}
// Une fois que les propriétés(position, couleur, etc) des objets sont définitives pour cette itération, on peut afficher les objets (les timers n'ont pas de représentation graphique et donc pas de fonction display)
  for(plat of platforms) {
    plat.display();
  }
  player.update();
  player.display();
}
