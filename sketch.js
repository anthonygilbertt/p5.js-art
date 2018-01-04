let angle = 0;
let w = 24;

function setup() {
           //set up code
createCanvas( 400, 400, WEBGL );

}

function draw() {
     //drawing code here
background(175);
translate(0, 50, 50);
   rotateX(PI / 8);
    //translate(width / 2 , height / 2);
rectMode(CENTER);

      // rotateX(angle * .25);
    
    
   
let offset = 0;
for ( let y = 0; y < height; y += w) {}
for (let x = 0; x < width; x += w) {
 
push();
let a = angle + offset;   
let h = map(sin(a), -1, 1, 0, 100);
fill(255);
translate(x - width / 2, 0, 0);
box(w, h,w);
//rect(x - width / 2 + w / 2, 0, w - 2, h);
offset += 0.1;
pop();
}
  angle += 0.1;
}
