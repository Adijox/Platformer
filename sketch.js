function setup() {
createCanvas(1000, 600);
background(51);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

/* 

Something new I discovered and that I find nice
Sorry but the dimension is the one from my computer screen 

var spot = {
	x: 100,
	y: 50
};

var col = {
	r: 255,
	g: 0,
	b: 0
};

function setup() {
	createCanvas(1920, 1080);
	background(0);
}

function draw() {
	col.r = random(0, 255);
	col.g = random(0, 255);
	col.b = random(0, 255);
	spot.x = random(0, width);
	spot.y = random(0, height);
	fill(col.r, col.g, col.b, 100);
	noStroke();
	ellipse(spot.x, spot.y, 24, 24);
}

