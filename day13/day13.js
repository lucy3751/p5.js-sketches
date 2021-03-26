///INSPIRATION: 
//https://twitter.com/MauriceMeilleur/status/1365763283182116866
//Armin Hofmann's Graphic Design Manual, pg. 70


let day = 13;//day sketch


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
let circlesSecondLastRow = [];
let circlesSecondTopRow = [];


function setup(){



    createCanvas(canvasWidth,canvasHeight);
    background(backgroundColor);

    //canvas border
    // stroke(0);
    // noFill();
    // rect(0,0,canvasWidth,canvasHeight);

    angleMode(DEGREES);

  
    //center point reference
    // stroke(0);
    // line(0,canvasHeight/2,canvasWidth,canvasHeight/2);
    // line(canvasWidth/2,0,canvasWidth/2,canvasHeight);



}

///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("o-day"+day,"png")//(name, file extension)

    }

}


function draw(){   

    //center the drawing
    translate(65,0);

        ////DRAWINGS
    
        //draw the circles grid + create the circles
        // stroke(0);
        circleGrid();
    
        //draw the letter O
        fill(red);
        drawOuter();

        fill(beige)
        drawInner();;
}



function circleGrid(){

    noStroke();
    noFill();

    // stroke(0);

    //DRAW CIRCLES, STORE THEIR PROPERTIES INTO AN ARRAY

    //first row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2; 
        y = startY;

        if(x === startX + gapX/2 || x === startX + 3*gapX/2){ //make the second and second last circle bigger
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
        y = startY+gapY/2;

        if(x === startX + gapX/2){ //make the second circle bigger
            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
            circlesSecondTopRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":bigCircleDiameter,
                "radius": bigCircleDiameter/2
            });
        }else{

            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesSecondTopRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });
       
         }

    }


    //middle row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2;
        y = startY+gapY;

        if(x === startX+gapX/2){ //make second circle smaller
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

    //second last row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2;
        y = startY+3*gapY/2;

        if(x === startX ){ //make the first circle bigger
            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
            circlesSecondLastRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":bigCircleDiameter,
                "radius": bigCircleDiameter/2
            });


        }else {
            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesSecondLastRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });

        }

    }

    //last row
    for (var i=0; i<5; i++){

        x = startX+i*gapX/2;
        y = startY+2*gapY;

        if(x === startX+gapX/2 ){ //make the second circle bigger
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



function drawInner(){


    //DRAWING SHAPE USING VERTEX METHOD - https://p5js.org/reference/#/p5/vertex

        
    //inner O part
    beginShape();

        //second row third circle, going counter- clockwise
        vertex(circlesSecondTopRow[2].centerX - circlesSecondTopRow[2].radius, circlesSecondTopRow[2].centerY);
        vertex(circlesBottomRow[2].centerX - circlesBottomRow[2].radius, circlesBottomRow[2].centerY);
        vertex(circlesBottomRow[2].centerX + circlesBottomRow[2].radius, circlesBottomRow[2].centerY);
        vertex(circlesMiddleRow[3].centerX + circlesMiddleRow[3].radius, circlesMiddleRow[3].centerY);
        vertex(circlesSecondTopRow[2].centerX - circlesSecondTopRow[2].radius, circlesSecondTopRow[2].centerY);
    endShape();

}


function drawOuter(){

    //outer O part
    beginShape();
    
        //starting at top row last circle, right point, going clockwise
        vertex(circlesTopRow[4].centerX + circlesTopRow[4].radius, circlesTopRow[4].centerY);

        //bottom row last circle
        vertex(circlesBottomRow[4].centerX + circlesBottomRow[4].radius, circlesBottomRow[4].centerY);
        vertex(circlesBottomRow[4].centerX - cos(45)*circlesBottomRow[4].radius, circlesBottomRow[4].centerY + sin(45)*circlesBottomRow[4].radius);

        //bottom row second circle
        vertex(circlesBottomRow[1].centerX, circlesBottomRow[1].centerY + circlesBottomRow[1].radius);
        
        //second last row first circle
        vertex(circlesSecondLastRow[0].centerX - circlesSecondLastRow[0].radius, circlesSecondLastRow[0].centerY);

        //first row second circle
        vertex(circlesTopRow[1].centerX + circlesTopRow[1].radius, circlesTopRow[1].centerY);
        //first row second last cirlce
        vertex(circlesTopRow[3].centerX, circlesTopRow[3].centerY- circlesTopRow[3].radius);

        //first row last circle
        vertex(circlesTopRow[4].centerX, circlesTopRow[4].centerY - circlesTopRow[4].radius);
        vertex(circlesTopRow[4].centerX + circlesTopRow[4].radius, circlesTopRow[4].centerY);

    endShape();

}





