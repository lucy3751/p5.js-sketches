                   
let day=16;

let canvasWidth = 1000;
let canvasHeight = 1000;

let columns;
let rows;
let scale = 40; //how big the triangle polygons will be

//array to store the extrude point values - z values of the vertex
//two dimensional array - an array inside a array - https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
let terrain;


//flying speed
let flying = 0;


//storing the third value of the stroke color
let clickEvent = 0;


//moving the whole drawing
let shift = 0;




function setup(){

    createCanvas(canvasWidth, canvasHeight, WEBGL);
    background(0);

    //how many rows and columns to draw
    columns = canvasWidth/scale + 40;
    rows = canvasHeight/scale;


    //create 2 dimensional array for javascript - //create the 2d array  - https://editor.p5js.org/hanxyn888@gmail.com/sketches/-sB9RNejP
    terrain = create2DArray(columns, rows);

    angleMode(DEGREES);

    //interactions
    mouseClicked();
    keyPressed();


}







function draw(){
    

   

    //speed
    flying -= 0.04;
    shift += 0.5;


    // clearCanvas();
   


    push();

        //whole drawing moves downwards animation
        translate(0-canvasWidth/2,-canvasHeight/2 + shift);

        rotateX(80);
        
        translate (-canvasWidth/2, -canvasHeight/2 + 10);

        noFill();
        
        //use mouse to control color
        stroke(mouseX,mouseY,clickEvent);

    

        
    //3D terrain generation - https://www.youtube.com/watch?v=IKB1hWWedMk&ab_channel=TheCodingTrain

        //draw a grid using triangle strip - drawing triangle polygons using verticies
        //extrude the verticies at random depth (terrain)
        for (var y=0 ; y<rows - 1; y++){//rows - 1 because doing the array for every single row and the row below it

            beginShape(TRIANGLE_STRIP);

            for (var x = 0 ; x<columns; x++){

                //rect(x*scale, y*scale,scale,scale);
                vertex(x*scale, y*scale, terrain[x][y]);
                vertex(x*scale, (y+1)*scale, terrain[x][y+1]); //y + 1 because we are drawing the top left vertex first, then the bottom left (y+1), then the top right, bottom right, so on...
               
            }

            endShape();

        }
    pop();


    let offsetY = flying;

    for (var y=0 ; y<rows; y++){
        let offsetX = 0;
        for (var x = 0 ; x<columns; x++){

        ////index x and index y of the array (since it is 2 dimensional?)
        terrain[x][y] = map(noise(offsetX, offsetY), 0,1,-150, 100) ; //map - https://p5js.org/reference/#/p5/map
        //map - change the range of the number to another range
        //     - the noise function gives values from 0 - 1, we want to modify its range

        offsetX += 0.2;

        }

        offsetY += 0.2;
   

    }
   

}


function clearCanvas(){

    push();
        translate(-canvasWidth/2,-canvasHeight/2);
        fill(0);
        rect(0,0,canvasWidth,canvasHeight);
    pop();
}





//create the 2d array -  - https://editor.p5js.org/hanxyn888@gmail.com/sketches/-sB9RNejP
function create2DArray(numArrays, numSubArrays) {
    var arr = new Array(numArrays);
    for (var i = 0; i < numArrays; i++) {
      arr[i] = new Array(numSubArrays);
    }
    return arr;
}


///MOUSE CLICK EVENT TO PLAY WITH ANGLE - https://p5js.org/reference/#/p5/mouseClicked
function mouseClicked() {

    //decrease angle by 10 if clicked on the left side of the canvas
    if(mouseX<=canvasWidth/2){

        console.log("left side");
        clickEvent = clickEvent - 10;

    }else if(mouseX>canvasWidth/2){///increase angle by 10 if clicked on the right side

        console.log("right side");
        clickEvent = clickEvent + 10;

    }
 
    // console.log(clickEvent);
}


///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("sketch-day-"+day,"png")//(name, file extension)

    }
}