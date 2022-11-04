const density = "++++-----       ";

let img;

function setup() {
  createCanvas(400, 400);
  img = loadImage("test.jpg");
} 

function draw() {
  background(220);
  image(img, 0, 0, width, height); 
  
  let w = width/2;
  let h = height/2;
  img.loadPixels();
  for ( let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i+j*img.width)*4;
      const r = img.pixels[pixelIndex + 0];  
      const g = img.pixels[pixelIndex + 1];  
      const b = img.pixels[pixelIndex + 2];  
      
      noStroke();
      fill(r,g,b);
      square(i*w, j*h,w);
    }
  }
} 
