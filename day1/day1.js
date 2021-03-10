//assigned letter: capital Z 
//colors this week: ONLY black and white (0 or 255), no greyscale

var canvasWidth=1000;
var canvasHeight=1000;

function setup(){

    //setup canvas
    var canvas = createCanvas(canvasWidth,canvasHeight);
    background(255);
    
    //drawing a stroke around the canvas (for reference)
    stroke(0);
    rect(0,0,1000,1000);

    //TRANSFORMATION MODES REFERENCES:
    ////set pivot point to center of rectangle - https://editor.p5js.org/elinsterz/sketches/evrSX1kzZ
    //set angle unit to degrees - https://p5js.org/reference/#/p5/angleMode
    rectMode(CENTER);
    angleMode(DEGREES);

  

}

function draw(){

    var x =canvasWidth;
    var y = canvasHeight;
    var w = 100;

  //TRANSFORMATIONS REFERENCES:
  //rotate - https://p5js.org/reference/#/p5/rotate
  //translate - https://p5js.org/reference/#/p5/translate
  //push and pop drawing states - https://p5js.org/reference/#/p5/push
  rect(x/5,y/5,w,w);
  rect(x/5+random(600),y/5,w,w);
  
  push(); //start a new drawing state
  rotate(-45);
  translate(-600,-100);
  rect(x/5+random(750),y-(y/5),w,w);

  pop();//goes back to the original state
  rect(x/5+random(600),y-(y/5),w,w);

}


function mousePressed(){
    saveCanvas("z-day1","png")//(name, file extension)
}