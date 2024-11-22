let images = [];

function preload() {
  for (let i = 0; i < 5; i++) {	
	// Corresponds to the file name
    images[i] = loadImage("img" + i + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
	// Loop through the array called images and render each one
  for (let i = 0; i < 5; i++) {
    image(images[i], width / 5 * i, 200, width / 5, width / 5);
  }
}
