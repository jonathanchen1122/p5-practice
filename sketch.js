const density = "++++-----       "

let video;

function preload() {
  video = loadImage("");
}

function setup() {
  createCanvas(400, 400);
} 

function draw() {
  background(220);
  Image(video, 400, 400); 
} 
