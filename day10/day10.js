///INSPIRATION: 
//https://twitter.com/MauriceMeilleur/status/1365763283182116866
//Armin Hofmann's Graphic Design Manual, pg. 70


let day = 10;//day sketch


//COLORS
let red = [211,64,58];
let beige = [255,252,232];

//CANVAS
let canvasHeight = 1000;
let canvasWidth = 1000;
let backgroundColor = beige //background of Canvas


//VARIABLES FOR DRAWING THE CIRCLE GRID
//where to start/end
let startX = canvasWidth/6;
let startY= canvasHeight/6;
let endX = canvasWidth - startX;
let endY = canvasHeight - startY;

//size 
let bigCircleDiameter = 100;
let smallCircleDiameter = 50;

//gap b/w the circles
let gapX = canvasWidth/2.3 - startX;
let gapY = canvasHeight/2 - startY


/// ARRAYS TO STORE THE CIRCLES
let circlesTopRow = [];
let circlesMiddleRow = [];
let circlesBottomRow = [];

//variable to store the b-value of r,g,b - for the color of the Z
let clickEvent=0;



function setup(){



    createCanvas(canvasWidth,canvasHeight);
    background(backgroundColor);

    //canvas border
    // stroke(0);
    // noFill();
    // rect(0,0,canvasWidth,canvasHeight);

    angleMode(DEGREES);

    mouseClicked();

    //center point reference
    // stroke(0);
    // line(0,canvasHeight/2,canvasWidth,canvasHeight/2);
    // line(canvasWidth/2,0,canvasWidth/2,canvasHeight);



}

///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("z-day"+day,"png")//(name, file extension)

    }

}


///MOUSE CLICK EVENT TO PLAY WITH THE B-VALUE FROM THE LETTER COLOR - https://p5js.org/reference/#/p5/mouseClicked
function mouseClicked() {

    //decrease b-value by 10 if clicked on the left side of the canvas
    if(mouseX<=canvasWidth/2){

        console.log("left side");
        clickEvent = clickEvent - 10;
    }else if(mouseX>canvasWidth/2){///increase b-value by 10 if clicked on the right side

        console.log("right side");
        clickEvent = clickEvent + 10;
    }
 
    // console.log(clickEvent);
}



function draw(){   


    translate(65,0);
    //move/press the mouse to change color
    // let letterColor = [mouseX,mouseY,clickEvent];       

        ////DRAWINGS
    
        //draw the circles grid + create the circles
        // stroke(0);
        circleGrid();
    
        //draw the letter Z
        fill(red);
        drawZ();
}




function circleGrid(){

    noStroke();
    noFill();

    //DRAW CIRCLES, STORE THEIR PROPERTIES INTO AN ARRAY

    //first row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2; 
        y = startY;

        if(x === startX || x === startX + 3*gapX/2){ //make the first and second last circle bigger
            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
            circlesTopRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":bigCircleDiameter,
                "radius": bigCircleDiameter/2
            });
        }else{

            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesTopRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });
       
         }

    }


    //second row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2;
        y = startY+gapY;

        if(x === startX+gapX/2 || x === canvasWidth/2 ){ //make second, and third circle smaller
            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesMiddleRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });
        }else{
            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
                circlesMiddleRow.push({
                    "centerX":x,
                    "centerY":y,
                    "diameter":bigCircleDiameter,
                    "radius": bigCircleDiameter/2
                });
            }

    }

    //third row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2;
        y = startY+2*gapY;

        if(x === startX || x === endX ){ //make the first and last circle bigger
            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
            circlesBottomRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":bigCircleDiameter,
                "radius": bigCircleDiameter/2
            });


        }else {
            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesBottomRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });

        }

    }
    
}



function drawZ(){


    //DRAWING SHAPE USING VERTEX METHOD - https://p5js.org/reference/#/p5/vertex
    beginShape();


        
        //starting from top row, left
        //going clockwise
        
     
        //first row part
        vertex(circlesTopRow[0].centerX, circlesTopRow[0].centerY- circlesTopRow[0].radius);   
        vertex(circlesTopRow[3].centerX, circlesTopRow[3].centerY- circlesTopRow[3].radius);
        vertex(circlesTopRow[3].centerX + cos(45)*circlesTopRow[3].radius, circlesTopRow[3].centerY + sin(45)*circlesTopRow[3].radius );



        //first to last row diagonal line
        vertex(circlesBottomRow[2].centerX - circlesBottomRow[2].radius, circlesBottomRow[2].centerY);
        vertex(circlesBottomRow[2].centerX + circlesBottomRow[2].radius, circlesBottomRow[2].centerY);


        //last to middle row diagonal line
        vertex(circlesMiddleRow[3].centerX , circlesMiddleRow[3].centerY - circlesMiddleRow[3].radius);
        vertex(circlesMiddleRow[4].centerX + circlesMiddleRow[4].radius , circlesMiddleRow[4].centerY - circlesMiddleRow[4].radius);

        //middle row to bottom row vertical line
        vertex(circlesBottomRow[4].centerX + circlesBottomRow[4].radius, circlesBottomRow[4].centerY);
        vertex(circlesBottomRow[4].centerX - cos(45)*circlesBottomRow[4].radius, circlesBottomRow[4].centerY + sin(45)*circlesBottomRow[4].radius);

        //bottom row last circle to first circle
        vertex(circlesBottomRow[0].centerX, circlesBottomRow[0].centerY + circlesBottomRow[0].radius);
        vertex (circlesBottomRow[0].centerX - cos(45)*circlesBottomRow[0].radius, circlesBottomRow[0].centerY - sin(45)*circlesBottomRow[0].radius);

        //bottom row to middle row middle circle
        vertex(circlesMiddleRow[2].centerX + cos(45)*circlesMiddleRow[2].radius, circlesMiddleRow[2].centerY + sin(45)*circlesMiddleRow[2].radius);
        vertex(circlesMiddleRow[2].centerX, circlesMiddleRow[2].centerY - circlesMiddleRow[2].radius);

        vertex(circlesMiddleRow[0].centerX + cos(45)*circlesMiddleRow[0].radius, circlesMiddleRow[0].centerY + sin(45)*circlesMiddleRow[0].radius);
        vertex(circlesMiddleRow[0].centerX - cos(45)*circlesMiddleRow[0].radius, circlesMiddleRow[0].centerY - sin(45)*circlesMiddleRow[0].radius);

        //middle row to top row first circle
        vertex(circlesTopRow[0].centerX - circlesTopRow[0].radius, circlesTopRow[0].centerY);
        vertex(circlesTopRow[0].centerX, circlesTopRow[0].centerY- circlesTopRow[0].radius);  //starting point 




        
        
        

    endShape();

}





