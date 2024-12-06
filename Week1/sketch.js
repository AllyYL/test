function setup() {
  createCanvas(400, 400);
  img = loadImage('window copy.jpg'); 
}

function draw() {
  background(0);
  image(img, 0, 0, img.width / 4, img.height / 4);
  
  //Window & Shade details
  push();
  fill(140, 139, 128);
  noStroke();
  rect(40, 0, 26, 301);
  rect(0, 20, 348, 26);
  fill(140, 139, 142);
  quad(0, 301, 160, 301, 135, 400, 0, 400);
  rect(241, 301, 348, 301);
  pop();
  
  //wall space next to window
  fill(61, 43, 32);
  quad(348, 0, 348, 301, 400, 360, 400, 0);
  
  //bottle-tip
  fill(199, 199, 199);
  rect(182.5, 95, 35, 5, 20);
  bezier(185, 100, 180, 115, 185, 115, 185, 115);
  fill(219, 219, 219, 80);
  bezier(215, 100, 220, 115, 215, 115, 215, 115);
  bezier(185, 115, 198, 116, 214, 117, 215, 115);
  
  //bottleneck
  stroke(199, 199, 199);
  line(185, 115, 185, 155);
  stroke(219, 219, 219, 80);
  line(215, 115, 215, 155);
  line(188, 115, 188, 155);
  line(192, 115, 192, 155);
  line(196, 115, 196, 155);
  line(202, 115, 202, 155);
  
  noStroke();
  fill(219, 219, 219, 60);
  blendMode(EXCLUSION);
  rect(208, 115, 8, 40);
  
  blendMode(BLEND);
  stroke(122, 122, 122);
  
  //WHISKEY!
  push();
  
  fill(120, 47, 16);
  noStroke();
  blendMode(SCREEN);
  rect(160, 240, 80, 80);
  ellipse(200, 324, 80, 20);
  bezier(160, 240, 180, 220, 190, 230, 240, 240);
   //moon shadow
  translate(180, 3*height / 5);
  fill(120);
  blendMode(SCREEN);
  ellipse(0, 0, 20, 8);
  
  pop();
  
  //bottle-body
  bezier(215, 155, 225, 160, 235, 165, 240, 180);
  line(240,180, 240, 325);
  fill(255);
  stroke(255);
  bezier(185, 155, 175, 160, 165, 165, 160, 180);
  line(160,180, 160, 325);

  //bottle-body-dec
  stroke(196, 196, 196);
  line(165, 180, 165, 322);
  stroke(196, 196, 196);
  line(175, 177, 175, 325);
  stroke(160, 160, 160);
  line(197, 175, 195, 327);
  stroke(122, 122, 122);
  line(215, 175, 215, 327);
  line(225, 177, 225, 326);
  line(235, 180, 235, 322);  

  
  //vertical top connection
  bezier(187, 155, 174, 165, 168, 170, 165, 180);
  bezier(192, 155, 180, 165, 177, 170, 175, 177);
  bezier(196, 155, 197, 165, 198, 170, 197, 175);
  bezier(203, 155, 211, 165, 214, 170, 215, 175);
  bezier(208, 155, 218, 165, 220, 170, 225, 177);
  bezier(212, 155, 223, 165, 228, 170, 235, 180);
  
  
  //bottle-body-decorative-line-back
  stroke(88, 88, 88);
  bezier(194, 155, 190, 165, 190, 170, 188, 175);
  line(188, 175, 188, 310);
  
  //text-label for the whiskey brand  
  push();
  noStroke();
  fill(118, 125, 90, 220);
  rect(182, 216, 50, 40);
  bezier(182, 255, 205, 260, 209, 260, 232, 255);
  fill(0);
  textSize(24);
  text('響', 203, 240);
  textSize(8);
  text('HIBIKI', 185, 250);
  pop();
  
  //horizontal bottle bottom connection
  stroke(199, 199, 199);
  line(160, 320, 165, 322);
  line(165, 322, 175, 325);
  line(175, 325, 195, 327);
  line(195, 327, 215, 327);
  line(215, 327, 225, 326);
  line(225, 326, 235, 323);
  line(235, 323, 240, 320);
  //horizontal bottle bottom connection double
  line(160, 325, 165, 327);
  line(165, 327, 175, 330);
  line(175, 330, 195, 332);
  line(195, 332, 215, 332);
  line(215, 332, 225, 331);
  line(225, 331, 235, 328);
  line(235, 328, 240, 325);
  
  noFill();
  arc(200, 320, 80, 20, PI, 0);
  
  //backdrop
  push();
  strokeWeight(3);
  stroke(140, 139, 128);
  line(0, 301, 158, 301);
  line(241, 301, 348, 301);
  line(348, 0, 348, 301);
  line(348, 301, 400, 360);
  pop();
}