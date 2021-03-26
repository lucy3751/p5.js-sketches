let day=19;

let canvasHeight =1000;
let canvasWidth =1000;


let columns;
let rows;
let scale = 40; //how big the triangle polygons will be

let zImage;


//array to store the extrude point values - z values of the vertex
//two dimensional array - an array inside a array - https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
let terrain;

//flying speed
let flying = 0;
    


function preload(){

    zImage = loadImage('assets/mask_2.png');


}


function setup(){


    
    createCanvas(canvasWidth,canvasHeight,WEBGL);
    
    angleMode(DEGREES);

    
    // stroke(0);
    // rect(0,0,canvasWidth,canvasHeight);
    

    //for drawing the moving verticies
    columns = canvasWidth/scale + 40;
    rows = canvasHeight/scale;

    //create the 2 dimensional array in javascript - https://editor.p5js.org/hanxyn888@gmail.com/sketches/-sB9RNejP
    terrain = create2DArray(columns, rows);

}


function draw(){

    easyMask();
    drawMovingTerrain();


}

//3D terrain generation - https://www.youtube.com/watch?v=IKB1hWWedMk&ab_channel=TheCodingTrain
function drawMovingTerrain(){

       //speed
       flying -= 0.04;

       push();
            
           translate(-canvasWidth/2, -400);
   
            rotateX(60);
   
   
           noFill();
        
           stroke(255);
               
   
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

//mask using image - https://canvascloud.ocadu.ca/courses/2345/pages/class-recording-friday-march-19-3-10pm?module_item_id=109806
function easyMask(){

    push();
        translate(-canvasWidth/2, -canvasHeight/2);
        image(zImage,0,0);
    pop();


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



///PRESS S TO SAVE THE DRAWING - https://p5js.org/reference/#/p5/keyPressed
function keyPressed(){

    if(keyCode === 83){

        saveCanvas("z-day-"+day,"png")//(name, file extension)

    }
}

