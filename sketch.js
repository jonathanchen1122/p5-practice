//const density = "++++-----       ";

let vid;
let playing = true;

function setup() {
  createCanvas(400, 400);
  
  vid = createVideo("Vid.mp4");
  vid.size(48, 48);
  vid.volume(1);
  vid.loop();
  vid.hide(); 
} 

function draw() {
  //background(220);
  let img = vid.get();
  
  //image(vid, 0, 0, width, height); 
  let w = width/vid.width;
  let h = height/vid.height;
  vid.loadPixels();
  for ( let i = 0; i < vid.width; i++) {
    for (let j = 0; j < vid.height; j++) {
      const pixelIndex = (i+j*vid.width)*4;
      const r = vid.pixels[pixelIndex + 0];  
      const g = vid.pixels[pixelIndex + 1];  
      const b = vid.pixels[pixelIndex + 2];  
      const avg = (r + b + g)/3;
      
      noStroke();
      fill(avg);
      //square(i*w, j*h,w);
      text('0',i*w,j*h);
    }
  }
}
