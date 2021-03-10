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


    
    ///////THE TWO CURVES////////////////
    /////////////////////////////////////
    
    var x =canvasWidth;
    var y = canvasHeight;
    var widthX= 100;
    var baseWidth = 200;
    var sineValue;
    var w;
    var distance=0;
    var increment=3;


    for (var angle=0;angle<180;angle++){
        
        //USING SINE TO CREATE THE CURVE
        //https://p5js.org/reference/#/p5/sin
        sineValue=sin(angle);
        w=baseWidth*sineValue;
        
        distance=distance+increment;
    
        //TRANSFORMATIONS REFERENCES:
        //rotate - https://p5js.org/reference/#/p5/rotate
        //translate - https://p5js.org/reference/#/p5/translate
        rect(x/3+distance,y/5,widthX,w);
    
        rect(x-x/5-distance,y-(y/5),widthX,w);
    } 


    ////DIAGONAL LINE THAT CONNECTS THE TWO CURVES /////
    /////////////////////////////////////////////////

    //push and pop drawing states - https://p5js.org/reference/#/p5/push
    push(); //start a new drawing state 
    for (var i=0;i<600;i+=2.5){
        rect(x/3.8+i,y-(y/5)-i,100,1);
    }
    pop();//restore original state


}


function mousePressed(){
    saveCanvas("z-day2","png")//(name, file extension)
}