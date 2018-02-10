function Platform(x,y,width,col,index) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = 7;
  this.col = col;
  this.index = index;


//Afficher la plateforme
  this.display = function() {
    fill(this.col);
//20:valeur de la courbure des angles
//10:largeur arbitraire
    rect(this.x, this.y, this.width, this.height, 20);
  }
}
