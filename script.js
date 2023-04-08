let b = document.getElementById("display");
let w = b.clientWidth;
let h = b.clientHeight;


let x=1; 
let y=1; 
let rad=40;
let xdirection = 1; 
let ydirection = 1;
let time=0;

function setup() { 
  cnv=createCanvas(w, h);
  cnv.parent("display")
  x = width/2
  y = height/2
} 

function draw() { 
 // background(220);
  ellipse(x, y, rad, rad); 
  let dx = mouseX-50-x;
  x+=dx*0.05*xdirection; 
  let dy = mouseY-50-y;
  y+=dy*0.05*ydirection; 
  if (x > width - rad || x < rad) {
    xdirection *= -1;
  }
  if (y > height - rad || y < rad) {
    ydirection *= -1;
  }
  ellipse(w-x, h-y, rad, rad); 
}