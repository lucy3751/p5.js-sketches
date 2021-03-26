///INSPIRATION: 
//https://twitter.com/MauriceMeilleur/status/1365763283182116866
//Armin Hofmann's Graphic Design Manual, pg. 70



let day = 9;//day sketch

//CANVAS
let canvasHeight = 1000;
let canvasWidth = 1000;
let backgroundColor = [255]; //background of Canvas


//VARIABLES FOR DRAWING THE CIRCLE GRID
//where to start/end
let startX = canvasWidth/6;
let startY= canvasHeight/6;
let endX = canvasWidth - startX;
let endY = canvasHeight - startY;

//size 
let bigCircleDiameter = 5;
let smallCircleDiameter = 0;

// console.log(smallCircleDiameter);

//gap b/w the circles
let gapX = canvasWidth/2 - startX;
let gapY = canvasHeight/2 - startY;


/// ARRAYS TO STORE THE CIRCLES
let circlesTopRow = [];
let circlesMiddleRow = [];
let circlesBottomRow = [];
let extraSmallCircle = [];

//variable to store the b-value of r,g,b - for the color of the Z
let clickEvent=0;


function setup(){



    createCanvas(canvasWidth,canvasHeight);
    background(backgroundColor);

    // stroke(0);
    // noFill();
    // rect(0,0,canvasWidth,canvasHeight);

    angleMode(DEGREES);



}

///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("z-day"+day,"png")//(name, file extension)

    }

}




function draw(){

    //move/press the mouse to change color
    let letterColor = [46,159,252];
   

        ////DRAWINGS
        noStroke();

        //draw the circles to create the curve part of the Z
        fill(letterColor);
        circleGrid();
    
        //draw the letter Z
        fill(letterColor);
        drawZ();
    
        //mask the curve part of the letter 
        fill(backgroundColor);
        ellipse(circlesTopRow[1].centerX, circlesTopRow[1].centerY, circlesTopRow[1].diameter, circlesTopRow[1].diameter);
        ellipse(circlesMiddleRow[1].centerX, circlesMiddleRow[1].centerY, circlesMiddleRow[1].diameter, circlesMiddleRow[1].diameter);
        ellipse(circlesBottomRow[1].centerX, circlesBottomRow[1].centerY, circlesBottomRow[1].diameter, circlesBottomRow[1].diameter); 
        ellipse(extraSmallCircle[0].centerX, extraSmallCircle[0].centerY, extraSmallCircle[0].diameter, extraSmallCircle[0].diameter);

}




function circleGrid(){

    //DRAW CIRCLES, STORE THEIR PROPERTIES INTO AN ARRAY

    //first row
    for (var i=0; i<3; i++){

        x = startX+i*gapX; 
        y = startY;

        if(x == canvasWidth/2){ //make the center circle smaller
            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesTopRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });
        }else{

            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
            circlesTopRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":bigCircleDiameter,
                "radius": bigCircleDiameter/2
            });
       
         }

    }


    //second row
    for (var i=0; i<3; i++){

        x = startX+i*gapX;
        y = startY+gapY;

        if(x == canvasWidth/2){ //make center circle smaller
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
    for (var i=0; i<3; i++){

        x = startX+i*gapX;
        y = startY+2*gapY;

        if(x == startX){ //make first circle smaller
            ellipse(x, y, smallCircleDiameter, smallCircleDiameter);
            circlesBottomRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":smallCircleDiameter,
                "radius": smallCircleDiameter/2
            });


        }else {
            ellipse(x, y, bigCircleDiameter, bigCircleDiameter);
            circlesBottomRow.push({
                "centerX":x,
                "centerY":y,
                "diameter":bigCircleDiameter,
                "radius": bigCircleDiameter/2
            });

        }

    }


    //extra small circle
        ellipse (endX , canvasHeight/2+gapY/2 , smallCircleDiameter ,smallCircleDiameter);
        extraSmallCircle.push({
            "centerX": endX,
            "centerY": canvasHeight/2 + gapY/2,
            "diameter":smallCircleDiameter,
            "radius": smallCircleDiameter/2
        });
    
}



function drawZ(){


    //DRAWING SHAPE USING VERTEX METHOD - https://p5js.org/reference/#/p5/vertex
    beginShape();


        
        //starting from top row, left
        //going clockwise
        
        //horizontal line on the top
        vertex(circlesTopRow[0].centerX, circlesTopRow[0].centerY- circlesTopRow[0].radius);   
        vertex(circlesTopRow[2].centerX, circlesTopRow[2].centerY- circlesTopRow[2].radius);
        vertex(circlesTopRow[2].centerX + cos(45)*circlesTopRow[2].radius, circlesTopRow[2].centerY + sin(45)*circlesTopRow[2].radius );



        // //  //top row to middle row diagonal line
        vertex(circlesMiddleRow[1].centerX - cos(45)*circlesMiddleRow[1].radius, circlesMiddleRow[1].centerY - sin(45)*circlesMiddleRow[1].radius );


        //  //middle row - from center to right
        vertex(circlesMiddleRow[1].centerX + cos(45)*circlesMiddleRow[1].radius, circlesMiddleRow[1].centerY + sin(45)*circlesMiddleRow[1].radius );
        vertex(circlesMiddleRow[2].centerX, circlesMiddleRow[2].centerY - circlesMiddleRow[2].radius);
        vertex(circlesMiddleRow[2].centerX + circlesMiddleRow[2].radius, circlesMiddleRow[2].centerY );



        // //middle row to small circle between middle and bottom row
        vertex(extraSmallCircle[0].centerX - extraSmallCircle[0].radius, extraSmallCircle[0].centerY );
        
        vertex(circlesBottomRow[2].centerX + cos(45)*circlesBottomRow[2].radius, circlesBottomRow[2].centerY - sin(45)*circlesBottomRow[2].radius);


        // //bottom row - from right to left
        vertex(circlesBottomRow[2].centerX - cos(45)*circlesBottomRow[2].radius, circlesBottomRow[2].centerY + sin(45)*circlesBottomRow[2].radius );
        vertex(circlesBottomRow[1].centerX, circlesBottomRow[1].centerY - circlesBottomRow[1].radius );
        vertex(circlesBottomRow[0].centerX + cos(45)*circlesBottomRow[0].radius, circlesBottomRow[0].centerY + sin(45)*circlesBottomRow[0].radius );
        vertex(circlesBottomRow[0].centerX - cos(45)*circlesBottomRow[0].radius, circlesBottomRow[0].centerY - sin(45)*circlesBottomRow[0].radius );

   
        // //  //bottom row to first row middle circle
        vertex(circlesTopRow[1].centerX + cos(45)*circlesTopRow[1].radius, circlesTopRow[1].centerY + sin(45)*circlesTopRow[1].radius );
        vertex(circlesTopRow[1].centerX - circlesTopRow[1].radius, circlesTopRow[1].centerY);
        
        // //first row middle circle to middle row first circle
        vertex(circlesMiddleRow[0].centerX + cos(45)*circlesMiddleRow[0].radius, circlesMiddleRow[0].centerY + sin(45)*circlesMiddleRow[0].radius );
        vertex(circlesMiddleRow[0].centerX - circlesMiddleRow[0].radius, circlesMiddleRow[0].centerY);

        // //middle row first circle to first row left circle
        vertex(circlesTopRow[0].centerX - circlesTopRow[0].radius, circlesTopRow[0].centerY);
        //  //back to starting point
        vertex(circlesTopRow[0].centerX, circlesTopRow[0].centerY- circlesTopRow[0].radius);   
        
        
        

    endShape();

}





