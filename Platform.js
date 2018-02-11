function Platform(x,y,width,col,index) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = 7;
  this.col = col;
  this.fillcol;
//Contrairement à l'objet Player, cette fonction switch apparait dans l'iitialisation et non dans la fonction update car les plateformes ne changeront jamais de couleur: la détection n'a pas besoin  d'etre dynamique
  switch(this.col) {
    case 0 :
    this.fillcol = color(129,222,118);
    break;
    case 1 :
    this.fillcol = color(255,163,81);
    break;
  }
  this.index = index;


//Afficher la plateforme
  this.display = function() {
    fill(this.fillcol);
//30:valeur de la courbure des angles
//7:largeur arbitraire
    rect(this.x, this.y, this.width, this.height, 30);
  }
}
